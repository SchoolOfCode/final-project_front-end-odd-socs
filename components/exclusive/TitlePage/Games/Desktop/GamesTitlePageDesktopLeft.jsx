import styled from "styled-components";
import Image from "next/image";

import {
  TitlePageLeftContainer,
  TitleImageContainer,
  TitleIconsContainer,
  TitleIconContainer,
} from "../../Movies-TV/Desktop/TitlePageDesktopLeft";

import AddCommentIcon from "@mui/icons-material/AddComment";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";


function GamesTitlePageDesktopLeft({ gameData }) {
  return (
    <TitlePageLeftContainer>
      <TitleImageContainer>
        <Image
          src={gameData.background_image}
          objectFit="cover"
          alt="game"
          priority
          layout="fill"
        ></Image>
      </TitleImageContainer>
      <TitleIconsContainer>
        <TitleIconContainer tabIndex={1}>
          <AddCommentIcon  fontSize="large" />
        </TitleIconContainer>
        <TitleIconContainer tabIndex={2}>
          <BeenhereIcon fontSize="large" />
        </TitleIconContainer>
        <TitleIconContainer tabIndex={3}>
          <BookmarkBorderIcon fontSize="large" />
        </TitleIconContainer>
        <TitleIconContainer tabIndex={4}>
          <ShareIcon fontSize="large" />
        </TitleIconContainer>
      </TitleIconsContainer>
    </TitlePageLeftContainer>
  );
}

export default GamesTitlePageDesktopLeft;
