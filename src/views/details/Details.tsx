import { useComic } from "../../hooks";
import classes from "./Details.module.css";

export const Details = () => {
  const { comic } = useComic();
  console.log("comic", comic);
  return (
    <div className="container">
      <div>Details</div>
    </div>
  );
};
