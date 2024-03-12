import {GraphQLClient} from "graphql-request";

const {GRAPH_CMS_ENDPOINT, GRAPH_CMS_API_KEY} = process.env;
export default new GraphQLClient(GRAPH_CMS_ENDPOINT ?? '', {
    headers: {
        Authorization: `Bearer ${GRAPH_CMS_API_KEY}`
    }
})