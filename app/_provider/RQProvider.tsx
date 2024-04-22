'use client'

import React, {ReactNode, useState} from "react";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";

interface Props {
    children: ReactNode;
};

export default function RQProvider({children}: Props) {
    const [client] = useState(
        new QueryClient({
            defaultOptions: {  // react-query 전역 설정
                queries: {
                    refetchOnWindowFocus: false,
                    retryOnMount: true,
                    refetchOnReconnect: false,
                    retry: false,
                },
            },
        })
    );

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );

}