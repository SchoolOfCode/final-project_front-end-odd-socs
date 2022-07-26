import CloseIcon from "@mui/icons-material/Close";
import { NavIconContainer } from "../../../universal/Containers.styles";

function NavCloseIcon({menuModalCloseHandler}) {
  return <CloseIcon onClick={menuModalCloseHandler} style={NavIconContainer} />;
}

export default NavCloseIcon;
