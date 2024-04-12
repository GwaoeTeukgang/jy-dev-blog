import axios, { AxiosRequestConfig } from 'axios';

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_END_POINT,
});

const MAX_RETRY_COUNT = 5;
let retryCount = 0;
client.interceptors.response.use((response) => {
  if (response.data.data) {
    retryCount = 0;
    return response;
  }

  if (retryCount < MAX_RETRY_COUNT) {
    retryCount++;
    return new Promise((resolve) =>
      setTimeout(() => resolve(client(response.config)), 1000),
    );
  } else {
    retryCount = 0;
    throw new Error(
      'Api 호출 실패' +
        JSON.stringify({ ...response.data, ...response.config }),
    );
  }
});

export default client;

const adminClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_END_POINT,
});

adminClient.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] =
      `Bearer ${process.env.NEXT_PUBLIC_ADMIN_KEY}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { adminClient };
