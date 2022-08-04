import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import {
  SearchIconContainer,
  SearchIconsContainer,
} from "../../../universal/Containers.styles";

import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TvIcon from "@mui/icons-material/Tv";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { BsSearch } from "react-icons/bs";

const ModalStyles = styled.div`
  position: fixed;
  display: flex;
  z-index: 10;
  width: 100vw;
  height: 90vh;
  top: 0;
  left: 0;
  backdrop-filter: blur(30px);
  margin-top: 10vh;
  padding: 2rem 0;
`;

const ModalContentContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--highlight);
  font-family: var(--font-secondary);
  width: 100%;
  gap: 8rem;
  z-index: 10;
`;

const NavRowSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: white;
  padding: 0 1rem;
`;

const NavRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: white;
  padding: 0 1rem;

  @media screen and (max-width: 400px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const SearchStyle = styled.h1`
  font-size: 4rem;
  font-weight: 300;
`;

const IconsStyle = styled.div`
  display: flex;
  border: 2px solid transparent;
  padding: 0.5rem;

  &:focus {
    color: var(--secondary);
    border: 2px solid var(--secondary);
  }

  &:hover {
    color: var(--secondary);
    transition: 400ms ease-in-out;
  }
`;

const Searchbar = styled.input`
  width: 25rem;
  font-size: 2rem;
  color: white;
  background-color: transparent;
  border-bottom: 1px solid var(--font-secondary-color);
  border-right: none;
  border-left: none;
  border-top: none;
  padding: 0 0.5rem;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;

function NavSearchModal() {
  return (
    <ModalStyles>
      <ModalContentContainer>
        <NavRowSearch>
          <SearchStyle>Search</SearchStyle>
          <BsSearch style={SearchIconContainer} />
        </NavRowSearch>
        <NavRow>
          <SearchIconsContainer>
            <IconsStyle tabIndex={1}>
              <LocalMoviesIcon />
            </IconsStyle>
            <IconsStyle tabIndex={2}>
              <TvIcon />
            </IconsStyle>
            <IconsStyle tabIndex={3}>
              <LibraryMusicIcon />
            </IconsStyle>
            <IconsStyle tabIndex={4}>
              <SportsEsportsIcon />
            </IconsStyle>
          </SearchIconsContainer>
          <Searchbar />
        </NavRow>
      </ModalContentContainer>
    </ModalStyles>
  );
}

export default NavSearchModal;
