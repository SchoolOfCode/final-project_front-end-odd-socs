import styled from "styled-components";
import { PageContainer } from "../../universal/Containers.styles";
import TopGames from "../HomePage/TopGames";
import PlaylistGames from "./PlaylistGames";
import MyPicksGames from "./MyPicksGames";
import ClassicGames from "./ClassicGames";
import NewReleaseGames from "./NewReleaseGames";
import RandomGames from "./RandomGames";
import FPSGames from "./FPSGames";
import RPGGames from "./RPGGames";
import DrivingGames from "./DrivingGames";
import SportGames from "./SportGames";

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
      <ClassicGames />
      <NewReleaseGames />
      <RandomGames />
      <FPSGames />
      <RPGGames />
      <DrivingGames />
      <SportGames />

   
    </PageContainer>
    
  );
}

export default GamesPage;
