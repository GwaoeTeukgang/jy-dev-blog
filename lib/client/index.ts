import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {registerApolloClient} from "@apollo/experimental-nextjs-app-support/rsc";

const {STRAPI_END_POINT, STRAPI_ADMIN_TOKEN} = process.env;
const {getClient} = registerApolloClient(() => {
    return new ApolloClient({
        ssrMode: true,
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: `${STRAPI_END_POINT}/graphql`,
        }),
        headers: {
            Authorization: `Bearer ${STRAPI_ADMIN_TOKEN}`,
        }
    });
});


export default getClient;