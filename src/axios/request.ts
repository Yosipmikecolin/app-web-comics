import { axiosConfig } from "./config";

export const getAllComics = async () => {
  try {
    const response = await axiosConfig.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching comics:", error);
    throw error;
  }
};
