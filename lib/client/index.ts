import returnFetch, {FetchArgs, ReturnFetch} from "return-fetch";


const MAX_RETRY_COUNT = 5;
let retryCount = 0;


const interceptorResponse = (response: Response, responseArg: FetchArgs, fetch: ReturnType<ReturnFetch>) => {
    if (response.ok) {
        retryCount = 0;
        return response.json();
    }

    if (retryCount < MAX_RETRY_COUNT) {
        retryCount++;
        return new Promise(resolve => {
            setTimeout(() => resolve(fetch(...responseArg)), retryCount * 2 * 5000);
        });
    } else {
        retryCount = 0;
        return Promise.reject(response.json());
    }
}

const client = returnFetch({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_END_POINT,
    headers: {'Content-Type': 'application/json'},
    interceptors: {
        response: interceptorResponse
    }
});

export default client;

export const adminClient = returnFetch({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_END_POINT,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_KEY}`,
        'Content-Type': 'application/json'
    },
    interceptors: {
        response: interceptorResponse
    }
});
