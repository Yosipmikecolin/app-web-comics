import classes from "./Header.module.css";
import Portada1 from "../../assets/portada-1.jpeg";

export const Header = () => {
  return (
    <header className={classes["container-header"]}>
      <img src={Portada1} width={360} height={450} />
      <div>
        <h1>Batman Comics premium</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          tempore, optio voluptatem ab dolores cumque minus autem deserunt
          reprehenderit. Ab a eveniet magnam ullam doloremque amet consequuntur,
          sint quasi quas.
        </p>
      </div>
    </header>
  );
};
