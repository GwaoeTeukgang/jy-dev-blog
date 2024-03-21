"use client";
// ^ this file needs the "use client" pragma

import {ApolloLink, HttpLink} from "@apollo/client";
import {
    ApolloNextAppProvider,
    NextSSRApolloClient,
    NextSSRInMemoryCache,
    SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import {PropsWithChildren} from "react";


const {STRAPI_END_POINT} = process.env;

function makeClient() {
    const httpLink = new HttpLink({
        uri: STRAPI_END_POINT,
        fetchOptions: {cache: "no-store"},
    });

    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link:
            typeof window === "undefined"
                ? ApolloLink.from([
                    new SSRMultipartLink({
                        stripDefer: true,
                    }),
                    httpLink,
                ])
                : httpLink,
    });
}

export function ApolloWrapper({children}: PropsWithChildren) {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    );
}