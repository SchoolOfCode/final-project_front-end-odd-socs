import styled from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";
import SeeMore from "../../Movies-TV/Mobile/SeeMore";
import SeeLess from "../../Movies-TV/Mobile/SeeLess";
import { NavHR } from "../../../Header/NavMenu/NavModal";


import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import AddCommentIcon from "@mui/icons-material/AddComment";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const TitlePageContentContainer = styled.div`
  background-color: var(--primary);
  margin-top: 55vh;
  height: 100%;
  height: 500px;
  z-index: 0;
  -webkit-box-shadow: 0px -16px 22px 25px #0e161e;
  box-shadow: 0px -16px 22px 25px #0e161e;
`;

const TitlePageTitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  top: -7.5vh;
  height: 100%;
  padding: 0 2rem;
  gap: 1.5rem;
`;

const TitlePageStatsContainer = styled.div`
  display: flex;
  color: var(--highlight-1);
  font-size: 1.2rem;
`;

const TitlePageSynopsisContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitlePageIconsContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  color: white;
  justify-content: space-between;
`;

const TitlePageIconLabel = styled.h6`
  color: var(--font-secondary-color);
  font-weight: 400;
`

const TitlePageIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--secondary);
  }

  &:focus {
    color: var(--secondary);
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
`;

const Synopsis = styled.a`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  text-align: justify;
`;

const WatchOnContainer = styled.div`
  display: flex;
  align-items: center;
`;

const WatchOnText = styled.h3`
  font-size: 1.8rem;
  color: white;
`;

const WatchOnArrow = styled.span`
  color: white;
`;

const WatchOnIconContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

const CommentSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CommentHeader = styled.div`
  display: flex;
`;

const CommentTitle = styled.h5`
  color: white;
  font-weight: 300;
  width: 100%;
  font-size: 1.5rem;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: 300;
  width: 100%;
  gap: 1rem;
`;

const CommentText = styled.p`
  font-size: 1.5rem;
  /* text-align: justify; */
`;

function GameTitlePageMobileContents({ gameData, screenshotData }) {
  const [synopsis, setSynopsis] = useState("");
  const [isSynopsisOpen, setIsSynopsisOpen] = useState(false);

  const shortSynopsis = `${gameData.description_raw.slice(0, 150)}...`;

  useEffect(() => {
    setSynopsis(shortSynopsis);
  }, [shortSynopsis]);

  function toggleFullSynopsis(e) {
    e.preventDefault;
    setIsSynopsisOpen((prevSynopsisIsOpen) => !prevSynopsisIsOpen);
  }

  useEffect(() => {
    if (isSynopsisOpen === true) {
      setSynopsis(gameData.description_raw);
    }
  }, [isSynopsisOpen]);

  useEffect(() => {
    if (isSynopsisOpen === false) {
      setSynopsis(shortSynopsis);
    }
  }, [isSynopsisOpen, shortSynopsis]);

  const [isWatchOnOpen, setIsWatchOnOpen] = useState(false);

  function toggleWatchOnOpen(e) {
    e.preventDefault;
    setIsWatchOnOpen((prevIsWatchOnOpen) => !prevIsWatchOnOpen);
  }

  return (
    <TitlePageContentContainer>
      <TitlePageTitleContainer>
        <Title>{gameData.name}</Title>
        <TitlePageStatsContainer>{`${gameData.released.slice(0, 4)} | ${
          gameData.genres[0].name
        } | ${gameData.esrb_rating.name} | Metacritic: ${
          gameData.metacritic
        }`}</TitlePageStatsContainer>
        <TitlePageSynopsisContainer>
          <Synopsis href="#">{synopsis}</Synopsis>
          {isSynopsisOpen ? (
            <SeeLess toggleFullSynopsis={toggleFullSynopsis} />
          ) : (
            <SeeMore toggleFullSynopsis={toggleFullSynopsis} />
          )}
        </TitlePageSynopsisContainer>
        <TitlePageIconsContainer>
          <TitlePageIcon>
            <AddCommentIcon fontSize="large" />
            <TitlePageIconLabel>Comment</TitlePageIconLabel>
          </TitlePageIcon>
          <TitlePageIcon>
            <BeenhereIcon fontSize="large" />
            <TitlePageIconLabel>Picks</TitlePageIconLabel>
          </TitlePageIcon>
          <TitlePageIcon>
            <BookmarkBorderIcon fontSize="large" />
            <TitlePageIconLabel>Watchlist</TitlePageIconLabel>
          </TitlePageIcon>
          <TitlePageIcon>
            <ShareIcon fontSize="large" />
            <TitlePageIconLabel>Share</TitlePageIconLabel>
          </TitlePageIcon>
        </TitlePageIconsContainer>
        <NavHR />
        <CommentHeader>
          {/* <CommentTitle>{`Comments (${
            Object.values(CommentDummyData).length
          })`}</CommentTitle> */}
        </CommentHeader>
        <CommentSectionContainer>
          {/* {Object.values(CommentDummyData).map((comment, key) => {
            return (
              <Comment key={key}>
                <AccountCircleIcon />
                <CommentText>{comment}</CommentText>
              </Comment>
            );
          })} */}
        </CommentSectionContainer>
      </TitlePageTitleContainer>
    </TitlePageContentContainer>
  );
}

export default GameTitlePageMobileContents;
