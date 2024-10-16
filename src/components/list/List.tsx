import { useEffect } from "react";
import { getAllComics } from "../../axios/request";

export const List = () => {
  const getComics = async () => {
    await getAllComics();
  };

  useEffect(() => {
    getComics();
  }, []);

  return <div>List</div>;
};
