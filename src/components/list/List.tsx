import { getComics } from "../../api/queries";

export const List = () => {
  const { data, isLoading } = getComics();

  return isLoading ? <h1>Cargando</h1> : <div>List</div>;
};
