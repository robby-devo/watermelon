import { ILogin } from "../models/ILogin";
import { axiosAPI } from "./axiosInstance";

export const login = (payload: ILogin) => {
  return axiosAPI
    .post(`/login`, payload)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response.data;
    });
};
