import styled from "styled-components";
import { useEffect } from "react";

import { PageContainer } from "../../universal/Containers.styles";
import TopMovies from "./TopMovies";
import TopTV from "./TopTV";
import TopMusic from "./TopMusic";
import TopGames from "./TopGames";
import { useState } from "react";
import SwipeModal from "./SwipeModal";

import { getTop10Movies, getTop10TV } from "../../../api-routes/api-template";

const PageTitle = styled.div`
  color: var(--secondary);
  font-size: 3.5rem;
`;

function HomePage() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [count, setCount] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  // const [top10Movies, setTop10Movies] = useState();
  const [top10TV, setTop10TV] = useState();
  const [top10Music, setTop10Music] = useState();
  const [top10Games, setTop10Games] = useState();

  // useEffect(() => {
  //   setTop10Movies(getTop10Movies());
  //   setIsLoading(false);
  //   setTop10TV(getTop10TV());
  // }, []);

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
        <TopMovies />
        <TopTV />
        <TopMusic />
        <TopGames />
      </PageContainer>
    </>
  );
}

export default HomePage;
