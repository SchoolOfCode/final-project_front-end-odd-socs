import GamesPage from "../components/exclusive/GamesPage/GamesPage";
import Header from "../components/exclusive/Header/Header";

import {
  HeaderWrapper,
  PageWrapper,
} from "../components/universal/Containers.styles";

import { gamelist } from "../public/games-data/games-data";

export async function getStaticProps() {
  return {
    props: {
      gameList: gamelist,
    },
  };
}

function Games({ gameList }) {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <GamesPage gameList={gameList} />
      </PageWrapper>
    </>
  );
}

export default Games;
