import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { mutationDeleteWish } from "../../api/mutation";
import classes from "./Wishes.module.css";
import { getWish } from "../../api/queries";
import { Archive, ArrowLeft } from "lucide-react";
import { useUser } from "../../hooks/useUser";
import { Link } from "react-router-dom";
import { useWish } from "../../hooks/useWish";

const Wishes = () => {
  const { data, refetch, isPending: isPendingWish } = getWish();
  const { setWishes } = useWish();
  const { user } = useUser();
  const { mutateAsync } = mutationDeleteWish();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const deleteWish = async (idWish: string) => {
    setLoadingId(idWish);
    try {
      await mutateAsync(idWish);
      refetch();
      toast.success("Comic eliminado");
    } catch (error) {
      toast.error("Error al eliminar el comic");
    } finally {
      setLoadingId(null);
    }
  };

  useEffect(() => {
    if (data) {
      setWishes(data.comics);
    }
  }, [data]);

  return (
    user && (
      <section className={classes["container-wishes"]}>
        {isPendingWish ? (
          <div className={classes["loader-primary"]} />
        ) : (
          <>
            <Link to="/">
              <button className={classes["button-back"]}>
                <ArrowLeft />
                Atras
              </button>
            </Link>
            <h1>Tus comics favoritos</h1>
            <br />
            <div className={classes["container-card-wish"]}>
              {data?.comics.length ? (
                data?.comics.map((wish) => (
                  <div className={classes["card-wish"]} key={wish._id}>
                    <img src={wish.image} />
                    <p>{wish.name.slice(0, 24)}</p>
                    <button
                      onClick={() => deleteWish(wish._id)}
                      className={classes["button-delete"]}
                      disabled={loadingId === wish._id}
                    >
                      {loadingId === wish._id ? (
                        <div className={classes.loader} />
                      ) : (
                        "Eliminar comic"
                      )}
                    </button>
                  </div>
                ))
              ) : (
                <div className={classes["card-no-wisth"]}>
                  <Archive size={40} />
                  <h2>No tienes comics favoritos</h2>
                </div>
              )}
            </div>
          </>
        )}
      </section>
    )
  );
};

export default Wishes;
