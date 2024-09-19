import axios from "axios";
import { BaseURL } from "../Config";
import { tokenconfig } from "./appconfig";

const API_END_POINT = BaseURL;

const Axios = axios.create({
  baseURL: `${API_END_POINT}/`,
});

Axios.interceptors.request.use(
  (config) => {
    // Check for network connection
    if (!navigator.onLine) {
      const error = new Error("No internet connection");
      error.name = "NetworkError";
      return Promise.reject(error);
    }

    // Get token from localStorage
    const token = localStorage.getItem(tokenconfig.accessToken);

    if (config.requireAuth && token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["require-auth"] = true;
    } else {
      config.headers["require-auth"] = "false";
    }

    const userType = "user";
    config.headers["User-Type"] = userType;

    return config;
  },
  (error) => Promise.reject(error)
);

Axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      [401, 419].includes(error?.response?.status) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refresh_token = window.localStorage.getItem(
        tokenconfig.refreshToken
      );

      if (!refresh_token) {
        sessionStorage.clear();
        localStorage.clear();
        return Promise.reject(error);
      }

      try {
        const response = await axios.post(
          `${API_END_POINT}/auth/refresh-token`,
          {
            refresh_token,
          }
        );

        const { accessToken } = response.data;
        localStorage.setItem(tokenconfig.accessToken, accessToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axios(originalRequest);
      } catch (error) {
        sessionStorage.clear();
        localStorage.clear();
      }
    }

    return Promise.reject(error);
  }
);

export default Axios;
