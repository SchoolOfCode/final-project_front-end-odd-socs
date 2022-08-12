import styled from "styled-components";
import { PageContainer } from "../../universal/Containers.styles";
import TopGames from "./TopGames";
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

function GamesPage({ gameList }) {
  return (
    <PageContainer>
      <PageTitle>Video Games</PageTitle>
      <TopGames topGames={gameList.top10} />
      <IndieGames indieGames={gameList.indie} />
      <ActionGames actionGames={gameList.action} />
      <RPGGames rpgGames={gameList.rpg} />
      <FPSGames fpsGames={gameList.fps} />
      <ArcadeGames arcadeGames={gameList.arcade} />
      <MMORPGGames mmorpgGames={gameList.mmorpg} />
      <RandomGames randomGames={gameList.random} />
    </PageContainer>
  );
}

export default GamesPage;
