import { create } from "zustand";

interface Wishes {
  _id: string;
  name: string;
  image: string;
}

interface Wish {
  wishes: Wishes[] | [];
  setWishes: (wishes?: Wishes[]) => void;
}

export const useWish = create<Wish>((set) => ({
  wishes: [],
  setWishes: (wishes) => set((_state) => ({ wishes })),
}));
