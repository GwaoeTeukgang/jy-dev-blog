import axios from "axios";

const {STRAPI_END_POINT, STRAPI_ADMIN_TOKEN} = process.env;

const client = axios.create({
    baseURL: STRAPI_END_POINT,
});

export default client;