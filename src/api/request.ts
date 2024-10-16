import { Comic } from "../interface";
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
