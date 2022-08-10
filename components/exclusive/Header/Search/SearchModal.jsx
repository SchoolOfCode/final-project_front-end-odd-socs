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
import { useEffect, useState } from "react";

import SearchResults from "./SearchResults";

import { movielist } from "../../../../public/movie-data/movie-data";
import { tvlist } from "../../../../public/tv-data/tv-data";
import { musiclist } from "../../../../public/music-data/music-data";
import { gamelist } from "../../../../public/games-data/games-data";

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

const IconsAndInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  min-width: 40rem;
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

const LeftSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 20rem;
  gap: 1rem;
`;

const RightSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
`;

const SearchPrompt = styled.h1`
  color: white;
  font-weight: 300;
  font-size: 1.5rem;
  padding-left: 0.5rem;
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
  max-height: 50px;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;

function NavSearchModal({ searchModalCloseHandler }) {
  const [mediaType, setMediaType] = useState("");
  const [mediaList, setMediaList] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [dataResults, setDataResults] = useState([]);
  const [filteredResults, setFilteredResuls] = useState([]);

  function movieSelectHandle() {
    setMediaType("movies");
    setMediaList(movielist);
  }

  function tvSelectHandle() {
    setMediaType("tv");
    setMediaList(tvlist);
  }

  function musicSelectHandle() {
    setMediaType("music");
    setMediaList(musiclist);
  }

  function gamesSelectHandle() {
    setMediaType("games");
    setMediaList(gamelist);
  }

  function handleSearch(e) {
    e.preventDefault;
    const searchWord = e.target.value;
    console.log(mediaType);
    if (searchWord.length >= 2) {
      setSearchTerm(searchWord);
    } else if (searchWord.length < 3) {
      setDataResults([]);
    }
  }

  // Map over media object and return matches

  let resultsArray = [];

  useEffect(() => {
    switch (mediaType) {
      case "movies":
        setDataResults([]);
        Object.values(mediaList).map(function (value) {
          Object.values(value).map(function (entry) {
            if (entry.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              if (!resultsArray.includes(entry.name)) {
                resultsArray.push({ title: entry.title, id: entry.id });
              }
            }
          });
          setDataResults(resultsArray);
        });
        break;

      case "tv":
        setDataResults([]);
        Object.values(mediaList).map(function (value) {
          Object.values(value).map(function (entry) {
            if (entry.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              if (!resultsArray.includes(entry.name)) {
                resultsArray.push({ title: entry.name, id: entry.id });
              }
            }
          });
          setDataResults(resultsArray);
        });
        break;
      case "music":

      case "games":
        setDataResults([]);
        Object.values(mediaList).map(function (value) {
          Object.values(value).map(function (entry) {
            if (entry.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              if (!resultsArray.includes(entry.name)) {
                resultsArray.push({ title: entry.name, id: entry.id });
              }
            }
          });
          setDataResults(resultsArray);
        });
        break;
    }

    // Add link to returned items to direct to title page
  }, [searchTerm]);

  // console.log(dataResults);

  const clearInput = () => {
    setSearchTerm("");
    setDataResults([]);
  };

  return (
    <ModalStyles>
      <ModalContentContainer>
        <NavRowSearch>
          <SearchStyle>Search</SearchStyle>
          <BsSearch style={SearchIconContainer} />
        </NavRowSearch>
        <NavRow>
          <IconsAndInputContainer>
            <LeftSearchContainer>
              <SearchPrompt>
                Please select a content type before searching:
              </SearchPrompt>
              <SearchIconsContainer>
                <IconsStyle onClick={movieSelectHandle} tabIndex={1}>
                  <LocalMoviesIcon />
                </IconsStyle>
                <IconsStyle onClick={tvSelectHandle} tabIndex={2}>
                  <TvIcon />
                </IconsStyle>
                <IconsStyle onClick={musicSelectHandle} tabIndex={3}>
                  <LibraryMusicIcon />
                </IconsStyle>
                <IconsStyle onClick={gamesSelectHandle} tabIndex={4}>
                  <SportsEsportsIcon />
                </IconsStyle>
              </SearchIconsContainer>
            </LeftSearchContainer>
            <RightSearchContainer>
              <Searchbar onChange={handleSearch} />
              <SearchResults
                dataResults={dataResults}
                searchTerm={searchTerm}
                mediaType={mediaType}
                searchModalCloseHandler={searchModalCloseHandler}
              />
            </RightSearchContainer>
          </IconsAndInputContainer>
        </NavRow>
      </ModalContentContainer>
    </ModalStyles>
  );
}

export default NavSearchModal;
