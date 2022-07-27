import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { MenuIconContainer } from "../../../universal/Containers.styles";

function MenuMoviesIcon() {
  return (
    <LocalMoviesIcon
      style={(MenuIconContainer, { color: "var(--secondary)" })}
    />
  );
}

export default MenuMoviesIcon;
