import styled from "styled-components";
import Link from "next/link";

const ResultsBox = styled.div`
  position: absolute;
  top: 100%;
  min-width: 20rem;
  max-height: 10rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SearchResultLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    color: var(--secondary);
  }
`;

function SearchResults({
  dataResults,
  searchTerm,
  mediaType,
  searchModalCloseHandler,
}) {
  if (mediaType == "movies") {
    return (
      <ResultsBox>
        {dataResults.map((title) => {
          if (title.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            if (title.title.indexOf(title) === title.title.lastIndexOf(title)) {
              return (
                <Link href={`/title/movies/${title.id}`}>
                  <SearchResultLink onClick={searchModalCloseHandler}>
                    {title.title}
                  </SearchResultLink>
                </Link>
              );
            }
          }
        })}
      </ResultsBox>
    );
  } else if (mediaType == "tv") {
    return (
      <ResultsBox>
        {dataResults.map((title) => {
          if (title.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            if (title.title.indexOf(title) === title.title.lastIndexOf(title)) {
              return (
                <Link href={`/title/tv/${title.id}`}>
                  <SearchResultLink onClick={searchModalCloseHandler}>
                    {title.title}
                  </SearchResultLink>
                </Link>
              );
            }
          }
        })}
      </ResultsBox>
    );
  } else if (mediaType == "music") {
    return (
      <ResultsBox>
        {dataResults.map((title) => {
          if (title.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            if (title.title.indexOf(title) === title.title.lastIndexOf(title)) {
              const musicId = `${title.artist.replace(
                /\s/g,
                "+"
              )}-${title.title.replace(/\s/g, "+")}`;
              return (
                <Link href={`/title/music/${musicId}`}>
                  <SearchResultLink onClick={searchModalCloseHandler}>
                    {title.artist}: {title.title}
                  </SearchResultLink>
                </Link>
              );
            }
          }
        })}
      </ResultsBox>
    );
  } else if (mediaType == "games") {
    return (
      <ResultsBox>
        {dataResults.map((title) => {
          if (title.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            if (title.title.indexOf(title) === title.title.lastIndexOf(title)) {
              return (
                <Link href={`/title/games/${title.id}`}>
                  <SearchResultLink onClick={searchModalCloseHandler}>
                    {title.title}
                  </SearchResultLink>
                </Link>
              );
            }
          }
        })}
      </ResultsBox>
    );
  }
}

export default SearchResults;
