import GamesTitleImageMobile from "./GameTitleImageMobile";
import GameTitlePageMobileContents from "./GameTitlePageMobileContents";
import styled from "styled-components";

const MobilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

function GamesTitlePageMobile({ gameData, screenshotData }) {
  return (
    <MobilePageContainer>
      <GamesTitleImageMobile gameData={gameData} />
      <GameTitlePageMobileContents
        gameData={gameData}
        screenshotData={screenshotData}
      />
    </MobilePageContainer>
  );
}

export default GamesTitlePageMobile;
