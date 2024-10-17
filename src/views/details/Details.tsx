import { useEffect } from "react";
import { useComic } from "../../hooks/useComic";
import classes from "./Details.module.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ThumbsUp } from "lucide-react";
import { useUser } from "../../hooks/useUser";
import { Comic } from "../../interface";
import { mutationWish } from "../../api/mutation";
import toast from "react-hot-toast";
import { useWish } from "../../hooks/useWish";
import { getWish } from "../../api/queries";

const Details = () => {
  const { comic } = useComic();
  const { user } = useUser();
  const navigate = useNavigate();
  const { mutateAsync, isPending } = mutationWish();

  const { refetch } = getWish();
  const { wishes } = useWish();

  useEffect(() => {
    if (!comic) {
      navigate("/");
    }
  }, [comic]);

  const addWish = async (comic: Comic) => {
    try {
      if (!user) {
        navigate("/login");
      } else {
        await mutateAsync({ name: comic.name, image: comic.image.medium_url });
        refetch();
        toast.success("Comic guardado");
      }
    } catch (error) {
      toast.error("Error al guardar el comic");
    }
  };

  return (
    comic && (
      <div className={classes["container-details"]}>
        <button
          className={classes["button-back"]}
          onClick={() => navigate("/")}
        >
          <ArrowLeft />
          Atras
        </button>
        <img src={comic?.image.medium_url} />
        {wishes.find((i) => i.name === comic.name) ? (
          <button className={classes["button-wish-2"]}>Te gusta</button>
        ) : (
          <button
            onClick={() => addWish(comic)}
            className={classes["button-wish-1"]}
          >
            {isPending ? (
              "..."
            ) : (
              <>
                <ThumbsUp color="white" />
                <p>Me gusta</p>
              </>
            )}
          </button>
        )}

        <h1>{comic?.name}</h1>
        <strong>Fecha de la portada</strong>
        <p>{comic.cover_date}</p>

        <strong>Fecha de actualizacion</strong>
        <p>{comic.date_last_updated}</p>

        <strong>Nombre del volumen</strong>
        <p>{comic.volume.name}</p>

        <strong>Fecha de la portada</strong>
        <p>{comic.cover_date}</p>

        <strong>Descripcion:</strong>
        <div dangerouslySetInnerHTML={{ __html: comic?.description }} />
      </div>
    )
  );
};

export default Details;
