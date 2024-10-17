import { ThumbsUp, UserRound } from "lucide-react";
import classes from "./Menu.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className={classes["container-menu"]}>
      <ul>
        <li>
          <Link to="/signup">
            <UserRound color="white" />
          </Link>
        </li>
        <li>
          <Link to="/login">
            <ThumbsUp color="white" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
