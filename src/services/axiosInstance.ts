import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import {
  openRoutes,
  signInRoutes,
  urlConstants,
} from "../common/constants/urlConstants";

export const axiosAPI = axios.create({
  baseURL: urlConstants.BASE_URL,
});

axiosAPI.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const value = config;

    if (!signInRoutes.includes(value.url)) {
      const storedtoken = sessionStorage.getItem("token")?.replaceAll('"', "");
      if (storedtoken && value && value.headers) {
        value.headers.token = storedtoken;
      }
    }
    if (openRoutes.includes(value.url)) {
      const storedtoken = sessionStorage
        .getItem("accessCode")
        ?.replaceAll('"', "");
      if (storedtoken && value && value.headers) {
        value.headers.accessCode = storedtoken;
      }
    }

    return value;
  },
  (error: AxiosError) => Promise.reject(error)
);
