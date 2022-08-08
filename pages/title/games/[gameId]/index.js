import Header from "../../../../components/exclusive/Header/Header";
import GamesTitlePage from "../../../../components/exclusive/TitlePage/Games/GamesTitlePageMaster";

import {
  HeaderWrapper,
  PageWrapper,
} from "../../../../components/universal/Containers.styles";

import { useRouter } from "next/router";

import { gamelist } from "../../../../public/games-data/games-data";

function GamesTitle({ gameData }) {
  const router = useRouter();
  const titleId = router.query.gameId;

  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <GamesTitlePage gameData={gameData} />
      </PageWrapper>
    </>
  );
}

export async function getStaticPaths() {
  const topGamesIDs = gamelist.top10.map((game) => game.id.toString());
  const indieIDs = gamelist.indie.map((game) => game.id.toString());
  const actionIDs = gamelist.action.map((game) => game.id).toString();
  const rpgIDs = gamelist.rpg.map((game) => game.id.toString());
  const fpsIDs = gamelist.fps.map((game) => game.id.toString());
  const arcadeIDs = gamelist.arcade.map((game) => game.id.toString());
  const mmorpgIDs = gamelist.mmorpg.map((game) => game.id).toString();
  const randomIDs = gamelist.random.map((game) => game.id.toString());

  let IDs = [
    ...topGamesIDs,
    ...indieIDs,
    ...actionIDs,
    ...rpgIDs,
    ...fpsIDs,
    ...arcadeIDs,
    ...mmorpgIDs,
    ...randomIDs,
  ];

  return {
    fallback: false,
    paths: IDs.map((ID) => ({ params: { gameId: ID } })),
  };
}

export async function getStaticProps(context) {
  const gameId = context.params.gameId;

  const res = await fetch(
    `https://api.rawg.io/api/games/${gameId}?&key=5b68670474d34b3e9cbb4ed5cfe0d804`
  );
  const selectedGame = await res.json();

  console.log(selectedGame.background_image);

  return {
    props: {
      gameData: selectedGame,
    },
  };
}

export default GamesTitle;
