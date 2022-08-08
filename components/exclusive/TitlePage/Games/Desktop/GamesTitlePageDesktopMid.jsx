import styled from "styled-components";

import {
  TitlePageMidContainer,
  MidContainerTopSection,
  MidContainerMidSection,
  MidContainerBottomSection,
  ContentTitle,
  StatsContainer,
  Synopsis,
} from "../../Movies-TV/Desktop/TitlePageDesktopMid";

function GamesTitlePageDesktopMid({ gameData }) {
  return (
    <TitlePageMidContainer>
      <MidContainerTopSection>
        <ContentTitle>{gameData.name}</ContentTitle>
        <StatsContainer>{`${gameData.released.slice(0, 4)} | ${
          gameData.genres[0].name
        } | ${gameData.esrb_rating.name} | Metacritic: ${
          gameData.metacritic
        }`}</StatsContainer>
      </MidContainerTopSection>
      <MidContainerMidSection></MidContainerMidSection>
      <MidContainerBottomSection>
        <Synopsis>{gameData.description_raw}</Synopsis>
      </MidContainerBottomSection>
    </TitlePageMidContainer>
  );
}

export default GamesTitlePageDesktopMid;
