import { ThumbsUp, UserRound } from "lucide-react";
import classes from "./Menu.module.css";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

const Menu = () => {
  const { user } = useUser();
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
          <li>
            <Link to="/login">
              <ThumbsUp color="white" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
