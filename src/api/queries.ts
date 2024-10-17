import { useQuery } from "@tanstack/react-query";
import { getAllComics, getWishes } from "./request";

export const getComics = (page: number) => {
  return useQuery({
    queryKey: ["comics", page],
    queryFn: () => getAllComics(page),
  });
};

export const getWish = () => {
  return useQuery({
    queryKey: ["wishes"],
    queryFn: getWishes,
    staleTime: 60 * 60 * 1000,
    refetchOnWindowFocus:false
    
  });
};
