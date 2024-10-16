import { create } from "zustand";
import { Comic } from "../interface";

interface IComic {
  comic?: Comic;
  setComic: (comic: Comic) => void;
}

export const useComic = create<IComic>((set) => ({
  comic: undefined,
  setComic: (comic) => set((_state) => ({ comic })),
}));
