import styled from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import SeeMore from "./SeeMore";
import SeeLess from "./SeeLess";
import { NavHR } from "../../Header/NavMenu/NavModal";

import { CommentDummyData } from "../Desktop/TitlePageDesktopRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import AddCommentIcon from "@mui/icons-material/AddComment";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import GooglePlayIcon from "../../../../public/assets/WatchIcons/google.png";
import YouTubeIcon from "../../../../public/assets/WatchIcons/YT-White.png";
import AmazonIcon from "../../../../public/assets/WatchIcons/APV-White.png";

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
  gap: 2rem;
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
  width: 70%;
  margin: 0 auto;
  color: white;
  justify-content: space-between;
`;

const TitlePageIcon = styled.div`
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

function TitlePageContents() {
  // const [synopsis, setSynopsis] = useState("");
  // const [isSynopsisOpen, setIsSynopsisOpen] = useState(false);
  // const shortSynopsis = `${movieInfo.plot.slice(0, 150)}...`;

  // useEffect(() => {
  //   setSynopsis(shortSynopsis);
  // }, [shortSynopsis]);

  // function toggleFullSynopsis(e) {
  //   e.preventDefault;
  //   setIsSynopsisOpen((prevSynopsisIsOpen) => !prevSynopsisIsOpen);
  // }

  // useEffect(() => {
  //   if (isSynopsisOpen === true) {
  //     setSynopsis(movieInfo.plot);
  //   }
  // }, [isSynopsisOpen, movieInfo.plot]);

  // useEffect(() => {
  //   if (isSynopsisOpen === false) {
  //     setSynopsis(shortSynopsis);
  //   }
  // }, [isSynopsisOpen, shortSynopsis]);

  // const [isWatchOnOpen, setIsWatchOnOpen] = useState(false);

  // function toggleWatchOnOpen(e) {
  //   e.preventDefault;
  //   setIsWatchOnOpen((prevIsWatchOnOpen) => !prevIsWatchOnOpen);
  // }

  return (
    <TitlePageContentContainer>
      {/* <TitlePageTitleContainer>
        <Title>{movieInfo.title}</Title>
        <TitlePageStatsContainer>
          <TitlePageStatsContainer>{`${movieInfo.year} | Age | Runtime | IMDb: ${movieInfo.imDbRating}`}</TitlePageStatsContainer>
        </TitlePageStatsContainer>
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
          </TitlePageIcon>
          <TitlePageIcon>
            <BeenhereIcon fontSize="large" />
          </TitlePageIcon>
          <TitlePageIcon>
            <BookmarkBorderIcon fontSize="large" />
          </TitlePageIcon>
          <TitlePageIcon>
            <ShareIcon fontSize="large" />
          </TitlePageIcon>
        </TitlePageIconsContainer>
        <NavHR />
        <WatchOnContainer onClick={toggleWatchOnOpen}>
          <WatchOnText>Watch on:</WatchOnText>
          <WatchOnArrow>
            {isWatchOnOpen ? (
              <ArrowDropUpIcon fontSize="large" />
            ) : (
              <ArrowDropDownIcon fontSize="large" />
            )}
          </WatchOnArrow>
        </WatchOnContainer>
        {isWatchOnOpen && (
          <WatchOnIconContainer>
            <Image src={GooglePlayIcon} alt="Google Play Icon" />
            <Image src={YouTubeIcon} alt="YouTube Icon" />
            <Image src={AmazonIcon} alt="Amazon Icon" />
          </WatchOnIconContainer>
        )}
        <NavHR />
        <CommentHeader>
          <CommentTitle>{`Comments (${
            Object.values(CommentDummyData).length
          })`}</CommentTitle>
        </CommentHeader>
        <CommentSectionContainer>
          {Object.values(CommentDummyData).map((comment, key) => {
            return (
              <Comment key={key}>
                <AccountCircleIcon />
                <CommentText>{comment}</CommentText>
              </Comment>
            );
          })}
        </CommentSectionContainer>
      </TitlePageTitleContainer> */}
    </TitlePageContentContainer>
  );
}

export default TitlePageContents;
