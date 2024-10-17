import { Power, ThumbsUp, UserRound } from "lucide-react";
import classes from "./Menu.module.css";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

const Menu = () => {
  const { user, setUser } = useUser();

  const closeSesion = () => {
    localStorage.removeItem("token-mocion");
    localStorage.removeItem("username");
    setUser(undefined);
  };

  return (
    <nav className={classes["container-menu"]}>
      <ul>
        {user ? (
          <li>{user}</li>
        ) : (
          <li>
            <Link to="/signup">
              <UserRound color="white" />
            </Link>
          </li>
        )}

        {user && (
          <div className={classes["container-buttons"]}>
            <li>
              <Link to="/wishes" className={classes["button-wish"]}>
                <ThumbsUp color="white" />
              </Link>
            </li>

            <button onClick={closeSesion} className={classes["button-close-1"]}>
              Cerrar sesión
            </button>

            <button onClick={closeSesion} className={classes["button-close-2"]}>
              <Power color="white" />
            </button>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
