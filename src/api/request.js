// ----------------------------------------
// Axios Instance with Interceptors
// Path: src/api/request.js
// ----------------------------------------

import axios from "axios";
import nProgress from "nprogress";
// import { settings } from "@/constants";

/**
 * Axios instance configured with base URL, headers, and timeout.
 * Used for making API requests across the application.
 */
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // timeout: settings.apiWaitTime, // e.g. 8000 ms
  headers: {
    "Content-Type": "application/json",
  },
});

// ----------------------------------------
// Request Interceptor
// ----------------------------------------

request.interceptors.request.use(
  /**
   * Starts the progress bar and adds Authorization header if token is available.
   *
   * @param {import('axios').InternalAxiosRequestConfig} config
   * @returns {import('axios').InternalAxiosRequestConfig}
   */
  (config) => {
    nProgress.start();

    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },

  /**
   * Handles request error and stops the progress bar.
   *
   * @param {import('axios').AxiosError} error
   * @returns {Promise<import('axios').AxiosError>}
   */
  (error) => {
    nProgress.done();
    return Promise.reject(error);
  }
);

// ----------------------------------------
// Response Interceptor
// ----------------------------------------

request.interceptors.response.use(
  /**
   * Stops the progress bar and returns the response.
   *
   * @param {import('axios').AxiosResponse} response
   * @returns {import('axios').AxiosResponse}
   */
  (response) => {
    nProgress.done();
    return response;
  },

  /**
   * Handles response errors, stops progress, and logs out on 401.
   *
   * @param {import('axios').AxiosError} error
   * @returns {Promise<import('axios').AxiosError>}
   */
  (error) => {
    nProgress.done();

    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.reload();
    }

    return Promise.reject(error);
  }
);

export default request;
