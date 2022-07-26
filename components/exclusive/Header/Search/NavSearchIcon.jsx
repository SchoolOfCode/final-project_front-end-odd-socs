import SearchIcon from "@mui/icons-material/Search";
import { NavIconContainer } from "../../../universal/Containers.styles";

function NavSearchIcon({ searchModalOpenHandler }) {
  return (
    <SearchIcon onClick={searchModalOpenHandler} style={NavIconContainer} />
  );
}

export default NavSearchIcon;
