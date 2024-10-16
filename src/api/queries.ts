import { useQuery } from "@tanstack/react-query";
import { getAllComics } from "./request";

export const getComics = (page: number) => {
  return useQuery({
    queryKey: ["comics", page],
    queryFn: () => getAllComics(page),
  });
};
