import styled from "styled-components";
import Image from "next/image";
import { PageContainer } from "../../universal/Containers.styles";
import TopMovies from "./TopMovies";
import TopTV from "./TopTV";
import TopMusic from "./TopMusic";
import TopGames from "./TopGames";

const PageTitle = styled.div`
  color: var(--secondary);
  font-size: 3.5rem;
`

function HomePage() {
  return (
    <PageContainer>
    <PageTitle>Home</PageTitle>
      <TopMovies />
      <TopTV />
      <TopMusic />
      <TopGames />
    </PageContainer>
  );
}

export default HomePage;
