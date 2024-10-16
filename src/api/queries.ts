import { useQuery } from "@tanstack/react-query";
import { getAllComics } from "./request";

export const getComics = () => {
  return useQuery({
    queryKey: ["comics"],
    queryFn: getAllComics,
  });
};
