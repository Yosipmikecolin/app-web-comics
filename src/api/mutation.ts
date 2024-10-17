import { useMutation } from "@tanstack/react-query";
import { deleteWish, loginUser, registerUser, saveWish } from "./request";

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

export const mutationDeleteWish = () => {
  return useMutation({
    mutationFn: deleteWish,
  });
};
