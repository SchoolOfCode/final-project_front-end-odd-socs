import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
// import SearchCloseIcon from "../../../Header/Search/SearchCloseIcon";
import CloseIcon from "@mui/icons-material/Close";

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

const ScreenshotModal = styled.div`
position: absolute;
top: 50%;
left: 50%;
width: 60rem;
height: 40rem;
transform: translate(-50%, -50%);
background-color: darkgray;
padding: 5rem;
z-index: 100;
`

function GamesTitlePageDesktopMid({ gameData, screenshotData }) {
  const [isGameModalOpen, setGameModalOpen] = useState(false);
  const [screenshotID, setScreenshotID] = useState(null);
  function openGamesModal(e) {
    e.preventDefault();
    setGameModalOpen(true);
    const id = e.currentTarget.id;
    setScreenshotID(id);
  }

  function closeGamesModal() {setGameModalOpen(false)}

  return (
    <GamesTitlePageMidContainer>

      {isGameModalOpen && (
      <ScreenshotModal>
        <CloseIcon style={{zIndex:"1000",position:"absolute", top:"10px", right:"10px",fontSize:"3rem", color:"white"}} onClick={closeGamesModal} />
        <Image layout="fill" src={screenshotData.results[screenshotID].image } />
      </ScreenshotModal>
      )}
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
            // console.log(platform);
            return ` ${platform.platform.name} |`;
          })}
        </StatsContainer>
      </GamesMidContainerTopSection>
      <MidContainerMidSection>
        <RowContainer>
          <ScreenshotsAllContainer>
            {screenshotData.results.map((screenshot,index) => {
              return (
                <ScreenshotContainer id={index} onClick={openGamesModal}>
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
