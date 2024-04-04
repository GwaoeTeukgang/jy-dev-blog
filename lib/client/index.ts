import axios from 'axios';

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

// new Promise((resolve) =>
//     setTimeout(() => resolve(client(error.config)), 2 * retryCount * ONE_MINUTE),
// );
