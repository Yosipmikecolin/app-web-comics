import { useEffect } from "react";
import { useComic } from "../../hooks/useComic";
import classes from "./Details.module.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Details = () => {
  const { comic } = useComic();
  const navigate = useNavigate();

  useEffect(() => {
    if (!comic) {
      navigate("/");
    }
  }, [comic]);

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
