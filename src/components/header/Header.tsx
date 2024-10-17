import classes from "./Header.module.css";
import Portada1 from "../../assets/portada-1.jpeg";
import { Menu } from "../";

const Header = () => {
  return (
    <header>
      <Menu />
      <div className={classes["container-cover"]}>
        <img src={Portada1} width={360} height={450} />
        <div>
          <h1>Batman Comics premium</h1>
          <p>
            Una figura imponente de Batman se alza en el centro de la portada,
            con su capa oscura y su máscara de murciélago destacando en la
            oscuridad. Detrás de él, la ciudad de Gotham se extiende en una
            mezcla de luces y sombras, con la silueta del edificio de la Mansión
            Wayne visible en la distancia.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
