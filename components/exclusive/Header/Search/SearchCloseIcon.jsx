import CloseIcon from "@mui/icons-material/Close";
import { NavIconContainer } from "../../../universal/Containers.styles";

function SearchCloseIcon({ searchModalCloseHandler }) {
  return (
    <CloseIcon onClick={searchModalCloseHandler} style={NavIconContainer} />
  );
}

export default SearchCloseIcon;
