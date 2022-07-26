import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { MenuIconContainer } from "../../../universal/Containers.styles";

function MenuMusicIcon() {
  return (
    <LibraryMusicIcon
      style={(MenuIconContainer, { color: "var(--secondary)" })}
    />
  );
}

export default MenuMusicIcon;
