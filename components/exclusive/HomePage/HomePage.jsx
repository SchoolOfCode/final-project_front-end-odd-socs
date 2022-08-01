import styled from "styled-components";

import { PageContainer } from "../../universal/Containers.styles";
import TopMovies from "./TopMovies";
import TopTV from "./TopTV";
import TopMusic from "./TopMusic";
import TopGames from "./TopGames";
import { useState } from "react";
import SwipeModal from "./SwipeModal";

const PageTitle = styled.div`
  color: var(--secondary);
  font-size: 3.5rem;
`;

function HomePage() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <>
    <PageContainer>
      { isFirstLoad && count ===0 && (
      <SwipeModal setIsFirstLoad={setIsFirstLoad} setCount={setCount} count={count}/> )}
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
