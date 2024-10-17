import { useEffect } from "react";
import { useComic } from "../../hooks/useComic";
import classes from "./Details.module.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ThumbsUp } from "lucide-react";
import { useUser } from "../../hooks/useUser";
import { Comic } from "../../interface";
import { mutationWish } from "../../api/mutation";
import toast from "react-hot-toast";

const Details = () => {
  const { comic } = useComic();
  const { user } = useUser();
  const navigate = useNavigate();
  const { mutateAsync, isPending } = mutationWish();

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
        <button
          onClick={() => addWish(comic)}
          className={classes["button-wish"]}
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
