import Header from "../../../../components/exclusive/Header/Header";
import GamesTitlePage from "../../../../components/exclusive/TitlePage/Games/GamesTitlePageMaster";

import {
  HeaderWrapper,
  PageWrapper,
} from "../../../../components/universal/Containers.styles";

import { useRouter } from "next/router";

import { gamelist } from "../../../../public/games-data/games-data";

function GamesTitle({ gameData, screenshotData }) {
  const router = useRouter();
  const titleId = router.query.gameId;

  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <GamesTitlePage gameData={gameData} screenshotData={screenshotData} />
      </PageWrapper>
    </>
  );
}

// export async function getStaticPaths() {
//   const topGamesIDs = gamelist.top10.map((game) => game.id.toString());
//   const indieIDs = gamelist.indie.map((game) => game.id.toString());
//   const actionIDs = gamelist.action.map((game) => game.id).toString();
//   const rpgIDs = gamelist.rpg.map((game) => game.id.toString());
//   const fpsIDs = gamelist.fps.map((game) => game.id.toString());
//   const arcadeIDs = gamelist.arcade.map((game) => game.id.toString());
//   const mmorpgIDs = gamelist.mmorpg.map((game) => game.id).toString();
//   const randomIDs = gamelist.random.map((game) => game.id.toString());

//   let IDs = [
//     ...topGamesIDs,
//     ...indieIDs,
//     ...actionIDs,
//     ...rpgIDs,
//     ...fpsIDs,
//     ...arcadeIDs,
//     ...mmorpgIDs,
//     ...randomIDs,
//   ];

//   return {
//     fallback: true,
//     paths: IDs.map((ID) => ({ params: { gameId: ID } })),
//   };
// }

export async function getServerSideProps(context) {
  const gameId = context.params.gameId;
  const resGame = await fetch(
    `https://api.rawg.io/api/games/${gameId}?&key=5b68670474d34b3e9cbb4ed5cfe0d804`
  );
  const selectedGameData = await resGame.json();

  const selectedGameSlug = selectedGameData.slug;

  const resScreenshot = await fetch(
    `https://api.rawg.io/api/games/${selectedGameSlug}/screenshots?&key=5b68670474d34b3e9cbb4ed5cfe0d804`
  );
  const selectedGameScreenshots = await resScreenshot.json();

  return {
    props: {
      gameData: selectedGameData,
      screenshotData: selectedGameScreenshots,
    },
  };
}

export default GamesTitle;
