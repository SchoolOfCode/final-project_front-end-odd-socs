import styled from "styled-components";
import Image from "next/image";
import { PageContainer } from "../../universal/Containers.styles";
import MyPicksMovies from "../MoviesPage/MyPicksMovies";
import MyPicksTv from "../TvPage/MyPicksTv";
import MyPicksMusic from "../MusicPage/MyPicksMusic";
import MyPicksGames from "../GamesPage/MyPicksGames";

const PageTitle = styled.div`
  color: var(--secondary);
  font-size: 3.5rem;
`;

function MyPicksPage() {
  return (
    <PageContainer>
      <PageTitle>My Picks</PageTitle>
      <MyPicksMovies/>
      <MyPicksTv/>
      <MyPicksMusic/>
      <MyPicksGames/>
    </PageContainer>
  );
}

export default MyPicksPage;
