import styled from "styled-components";
import { useEffect } from "react";

import { PageContainer } from "../../universal/Containers.styles";
import TopMovies from "../MoviesPage/TopMovies";
import TopTV from "../TvPage/TopTV";
import TopMusic from "../MusicPage/TopMusic";
import TopGames from "../GamesPage/TopGames";
import { useState } from "react";
import SwipeModal from "./SwipeModal";

const PageTitle = styled.div`
  color: var(--secondary);
  font-size: 3.5rem;
`;

function HomePage({ movieList, tvList, musicList, gameList }) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <>
      <PageContainer>
        {isFirstLoad && count === 0 && (
          <SwipeModal
            setIsFirstLoad={setIsFirstLoad}
            setCount={setCount}
            count={count}
          />
        )}
        <PageTitle>Home</PageTitle>
        <TopMovies topMovies={movieList.top10} />
        <TopTV topTV={tvList.top10} />
        <TopMusic topMusic={musicList.top10} />
        <TopGames topGames={gameList.top10} />
      </PageContainer>
    </>
  );
}

export default HomePage;
