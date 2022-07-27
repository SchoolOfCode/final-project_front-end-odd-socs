import HomeIcon from "@mui/icons-material/Home";
import { MenuIconContainer } from "../../../universal/Containers.styles";

function MenuHomeIcon() {
  return (
    <HomeIcon style={(MenuIconContainer, { color: "var(--secondary)" })} />
  );
}

export default MenuHomeIcon;
