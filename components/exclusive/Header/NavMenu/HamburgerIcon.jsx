import MenuIcon from "@mui/icons-material/Menu";
import { NavIconContainer } from "../../../universal/Containers.styles";

function HamburgerIcon({ menuModalOpenHandler }) {
  return (
    <MenuIcon
      style={NavIconContainer}
      onClick={menuModalOpenHandler}
    ></MenuIcon>
  );
}

export default HamburgerIcon;
