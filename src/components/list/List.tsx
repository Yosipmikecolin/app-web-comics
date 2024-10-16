import { getComics } from "../../api/queries";
import classes from "./List.module.css";

export const List = () => {
  const { data, isLoading } = getComics();

  return isLoading ? (
    <h1>Cargando</h1>
  ) : (
    <section className={classes["container-list"]}>
      {data?.map((comic) => (
        <div className={classes["card-comic"]} key={comic.id}>
          <img src={comic.image.medium_url} />
          <div className={classes.content}>
            <h4>{comic.name.slice(0, 24)}</h4>
            <p>{comic.cover_date}</p>
            <button>Ver detalle</button>
          </div>
        </div>
      ))}
    </section>
  );
};
