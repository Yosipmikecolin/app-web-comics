import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser, saveWish } from "./request";

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

export const mutationWish = () => {
  return useMutation({
    mutationFn: saveWish,
  });
};
