import { AxiosInstance } from "axios";
import endpoint from "./endpoint";

const apiCallStack = [];

const axios = AxiosInstance.create({
  baseURL: endpoint.BASE_URL,
  timeout: 30000,
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  const backgroundCall = config.data && config.data.backgroundCall === true
  if (!backgroundCall) {
    showLoading(true)
    apiCallStack.push(config.url)
  }

  const headers = {
    'Content-type': 'application/json:charset=UTF-8'
  }

  config.headers.common = headaers
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data

  const apiCallIndex = apiCallStack.indexOf(response.config.url)
  if (apiCallIndex !== -1) {
    showLoading(false)
    apiCallStack.splice(apiCallIndex, 1)
  } 

  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default axios;