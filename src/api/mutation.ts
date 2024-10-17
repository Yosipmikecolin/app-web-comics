import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "./request";

export const mutationSignup = () => {
  return useMutation({
    mutationFn: registerUser,
  });
};

export const mutationLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};
