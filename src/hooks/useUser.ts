import { create } from "zustand";

interface User {
  user?: string;
  setUser: (comic: string) => void;
}

export const useUser = create<User>((set) => ({
  user: undefined,
  setUser: (user) => set((_state) => ({ user })),
}));
