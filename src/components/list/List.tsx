import { useState } from "react";
import { getComics } from "../../api/queries";
import classes from "./List.module.css";

export const List = () => {
  const paginatios = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [page, setPage] = useState(1);
  const { data, isLoading, refetch } = getComics(page);

  const selectPage = (page: number) => {
    setPage(page);
    refetch();
  };

  return isLoading ? (
    <div className={classes["container-loader"]}>
      <div className={classes.loader} />
    </div>
  ) : (
    <section>
      <div className={classes["container-list"]}>
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
      </div>
      <div className={classes["container-pagination"]}>
        {paginatios.map((item) => (
          <div
            key={item}
            onClick={() => selectPage(item)}
            className={
              page === item
                ? classes["pagination-active"]
                : classes["pagination-disabled"]
            }
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};
