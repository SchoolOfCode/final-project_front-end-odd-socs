import styled from "styled-components";
import Image from "next/image";

import {
  TitlePageMidContainer,
  MidContainerTopSection,
  MidContainerMidSection,
  MidContainerBottomSection,
  ContentTitle,
  StatsContainer,
  Synopsis,
} from "../../Movies-TV/Desktop/TitlePageDesktopMid";

import { RowContainer } from "../../../../universal/Containers.styles";

const ScreenshotsAllContainer = styled.div`
  display: flex;
  min-width: 100%;
  gap: 1rem;
`;

const GamesTitlePageMidContainer = styled(TitlePageMidContainer)`
  max-width: 50%;
`;

const ScreenshotContainer = styled.div`
  width: 10rem;
  height: 7rem;
  position: relative;
`;

const GamesMidContainerTopSection = styled(MidContainerTopSection)`
  gap: 0.5rem;
`;

function GamesTitlePageDesktopMid({ gameData, screenshotData }) {
  return (
    <GamesTitlePageMidContainer>
      <GamesMidContainerTopSection>
        <ContentTitle>{gameData.name}</ContentTitle>
        <StatsContainer>{`${gameData.released.slice(0, 4)} | ${
          gameData.genres[0].name
        } | ${gameData.esrb_rating.name} | Metacritic: ${
          gameData.metacritic
        }`}</StatsContainer>
        <StatsContainer>
          Play on:
          {gameData.parent_platforms.map((platform) => {
            console.log(platform);
            return ` ${platform.platform.name} |`;
          })}
        </StatsContainer>
      </GamesMidContainerTopSection>
      <MidContainerMidSection style={{ border: "2px solid white" }}>
        <RowContainer>
          <ScreenshotsAllContainer>
            {screenshotData.results.map((screenshot) => {
              return (
                <ScreenshotContainer>
                  <Image src={screenshot.image} layout="fill"></Image>
                </ScreenshotContainer>
              );
            })}
          </ScreenshotsAllContainer>
        </RowContainer>
      </MidContainerMidSection>
      <MidContainerBottomSection>
        <Synopsis>{`${gameData.description_raw.slice(0, 400)}...`}</Synopsis>
      </MidContainerBottomSection>
    </GamesTitlePageMidContainer>
  );
}

export default GamesTitlePageDesktopMid;
