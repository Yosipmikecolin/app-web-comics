import { Comic, User } from "../interface";
import { axiosConfig } from "./config";

export const getAllComics = async (page: number) => {
  try {
    const response = await axiosConfig.get<Comic[]>(`/get-comics/${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comics:", error);
    throw error;
  }
};

export const registerUser = async (user: User) => {
  try {
    const response = await axiosConfig.post("/register-user", user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (user: { email: string; password: string }) => {
  try {
    const response = await axiosConfig.post("/login-user", user);
    return response.data;
  } catch (error) {
    throw error;
  }
};
