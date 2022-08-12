import styled from "styled-components";
import Image from "next/image";

import AddCommentIcon from "@mui/icons-material/AddComment";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import SocialFacebook from "../../../social/SocialFacebook";
import SocialReddit from "../../../social/SocialReddit";
import SocialTwitter from "../../../social/SocialTwitter";
import SocialWhatsApp from "../../../social/SocialWhatsApp";
import { useState } from "react";

const share = {
  config: [
    {
      facebook: {
        socialShareUrl: "https://facebook.com",
      },
    },
    {
      twitter: {
        socialShareUrl: "https://twitter.com",
      },
    },
  ],
};

export const TitlePageLeftContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  min-width: 18rem;
  
`;
export const TitleImageContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;

  > * {
    border-radius: 5px;
  }
`;

export const TitleIconsContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  color: white;
`;

export const TitleIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: large;

  &:hover {
    color: var(--secondary);
  }

  &:focus {
    color: var(--secondary);
  }
`;

export const TitlePageIconLabel = styled.h6`
  color: var(--font-secondary-color);
  font-weight: 400;
  font-size: 0.9rem;
`;
export const TitlePageSocialShareModal = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: large;
  width: 100%;
  height: 4.5rem;
  border-radius: 5px;
  
  top: 32rem;
  right: 0rem;
  padding: 0.5rem;
  
`;

export const SocialShareRowContainer = styled.div`
  display: flex;
  max-width: 20rem;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  
`;
//modalhandler functions

function handler() {}

function TitlePageDesktopLeft({ movieData, tvData }) {
  const [isSocialShareModalOpen, setIsSocialShareModalOpen] = useState(false);

  function socialShareModalToggleHandler() {
    setIsSocialShareModalOpen((isSocialShareModalOpen)=> !isSocialShareModalOpen);
  }

  return (
    <TitlePageLeftContainer>
      <TitleImageContainer>
        {movieData && (
          <Image
            src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
            layout="fill"
            objectFit="contain"
            alt="Title Image"
            priority={true}
          ></Image>
        )}
        {tvData && (
          <Image
            src={`https://image.tmdb.org/t/p/original${tvData.poster_path}`}
            layout="fill"
            objectFit="contain"
            alt="Title Image"
            priority={true}
          ></Image>
        )}
      </TitleImageContainer>
      <TitleIconsContainer>
        <TitleIconContainer tabIndex={1}>
          <AddCommentIcon onClick={handler} fontSize="large" />
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
          <TitlePageIconLabel>Share</TitlePageIconLabel>
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

export default TitlePageDesktopLeft;
