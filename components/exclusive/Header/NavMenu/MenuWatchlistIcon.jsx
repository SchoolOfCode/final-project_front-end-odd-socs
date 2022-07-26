import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { MenuIconContainer } from "../../../universal/Containers.styles";

function MenuWatchlistIcon() {
  return (
    <BookmarkBorderIcon
      style={(MenuIconContainer, { color: "var(--secondary)" })}
    />
  );
}

export default MenuWatchlistIcon;
