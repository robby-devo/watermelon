import { IAddUser } from "../models/IUser";
import { axiosAPI } from "./axiosInstance";

export const getUserData = (id: string) => {
  return axiosAPI
    .get(`/users/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response.data;
    });
};

export const saveUserData = (payload: IAddUser) => {
  return axiosAPI
    .post(`/users`, payload)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response.data;
    });
};
