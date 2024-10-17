import { useMutation } from "@tanstack/react-query";
import { registerUser } from "./request";

export const mutationUser = () => {
  return useMutation({
    mutationFn: registerUser,
  });
};
