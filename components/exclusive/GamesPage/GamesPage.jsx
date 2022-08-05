import styled from "styled-components";
import { PageContainer } from "../../universal/Containers.styles";
import TopGames from "../HomePage/TopGames";
import PlaylistGames from "./PlaylistGames";
import MyPicksGames from "./MyPicksGames";
import IndieGames from "./IndieGames";
import ActionGames from "./ActionGames";
import RPGGames from "./RPGGames";
import FPSGames from "./FPSGames";
import ArcadeGames from "./ArcadeGames";
import MMORPGGames from "./MMORPGGames";
import RandomGames from "./RandomGames";

const PageTitle = styled.div`
  color: var(--secondary);
  font-size: 3.5rem;
`;

function GamesPage() {
  return (
    <PageContainer>
      <PageTitle>Video Games</PageTitle>
      <TopGames />
      <PlaylistGames />
      <MyPicksGames />
      <IndieGames />
      <ActionGames />
      <RPGGames />
      <FPSGames />
      <ArcadeGames />
      <MMORPGGames />
      <RandomGames />   
    </PageContainer>
    
  );
}

export default GamesPage;
