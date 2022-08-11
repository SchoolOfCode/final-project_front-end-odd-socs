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

function handler() {

}

const MusicTitleImageContainer = styled(TitleImageContainer)`
  height: 60%;
`;

const MusicTitlePageLeftContainer = styled(TitlePageLeftContainer)`
  justify-content: flex-start;
  gap: 2rem;
`;

function MusicTitlePageDesktopLeft({ musicData }) {
  return (
    <MusicTitlePageLeftContainer>
      <MusicTitleImageContainer>
      {musicData.image[3]["#text"] && 
        <Image
          src={musicData.image[3]["#text"]}
          alt="game"
          priority
          layout="fill"
        ></Image>
      }
      </MusicTitleImageContainer>
      <TitleIconsContainer>
        <TitleIconContainer tabIndex={1}>
          <AddCommentIcon onClick={handler} fontSize="large" />
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
    </MusicTitlePageLeftContainer>
  );
}

export default MusicTitlePageDesktopLeft;
