import styled from "styled-components";

import {
  TitlePageContainer,
  PageContentContainer,
} from "../../Movies-TV/Desktop/TitlePageDesktop";

import GamesTitlePageDesktopLeft from "./GamesTitlePageDesktopLeft";
import GamesTitlePageDesktopMid from "./GamesTitlePageDesktopMid";
import GamesTitlePageDesktopRight from "./GamesTitlePageDesktopRight";

function GamesTitlePageDesktop({ gameData, screenshotData }) {
  return (
    <TitlePageContainer>
      <PageContentContainer>
        <GamesTitlePageDesktopLeft gameData={gameData} />
        <GamesTitlePageDesktopMid
          gameData={gameData}
          screenshotData={screenshotData}
        />
        <GamesTitlePageDesktopRight gameData={gameData} />
      </PageContentContainer>
    </TitlePageContainer>
  );
}

export default GamesTitlePageDesktop;
