import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

import {
  TitlePageLeftContainer,
  TitleImageContainer,
  TitleIconsContainer,
  TitleIconContainer,
  TitlePageIconLabel,
  TitlePageSocialShareModal,
  SocialShareRowContainer,
} from "../../Movies-TV/Desktop/TitlePageDesktopLeft";

import SocialFacebook from "../../../social/SocialFacebook";
import SocialReddit from "../../../social/SocialReddit";
import SocialTwitter from "../../../social/SocialTwitter";
import SocialWhatsApp from "../../../social/SocialWhatsApp";

import AddCommentIcon from "@mui/icons-material/AddComment";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";

function GamesTitlePageDesktopLeft({ gameData }) {
  const [isSocialShareModalOpen, setIsSocialShareModalOpen] = useState(false);

  function socialShareModalToggleHandler() {
    setIsSocialShareModalOpen(
      (isSocialShareModalOpen) => !isSocialShareModalOpen
    );
  }
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
          <AddCommentIcon fontSize="large" />
          <TitlePageIconLabel>Review</TitlePageIconLabel>
        </TitleIconContainer>
        <TitleIconContainer tabIndex={2}>
          <BeenhereIcon fontSize="large" />
          <TitlePageIconLabel>Picks</TitlePageIconLabel>
        </TitleIconContainer>
        <TitleIconContainer tabIndex={3}>
          <BookmarkBorderIcon fontSize="large" />
          <TitlePageIconLabel>Watchlist</TitlePageIconLabel>
        </TitleIconContainer>
        <TitleIconContainer tabIndex={4}>
          <ShareIcon onClick={socialShareModalToggleHandler} fontSize="large" />
          <TitlePageIconLabel >
            Share
          </TitlePageIconLabel>
        </TitleIconContainer>
      </TitleIconsContainer>
      {isSocialShareModalOpen && (
        <TitlePageSocialShareModal>
          <SocialShareRowContainer>
            <SocialFacebook />
            <SocialReddit />
            <SocialTwitter />
            <SocialWhatsApp />
          </SocialShareRowContainer>
        </TitlePageSocialShareModal>
      )}
    </TitlePageLeftContainer>
  );
}

export default GamesTitlePageDesktopLeft;
