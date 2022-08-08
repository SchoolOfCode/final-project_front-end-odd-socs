import styled from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import SeeMore from "./SeeMore";
import SeeLess from "./SeeLess";
import { NavHR } from "../../../Header/NavMenu/NavModal";

import { CommentDummyData } from "../../Movies-TV/Desktop/TitlePageDesktopRight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import AddCommentIcon from "@mui/icons-material/AddComment";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import GooglePlayIcon from "../../../../../public/assets/WatchIcons/google.png";
import YouTubeIcon from "../../../../../public/assets/WatchIcons/YT-White.png";
import AmazonIcon from "../../../../../public/assets/WatchIcons/APV-White.png";

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
`;

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
  font-size: 1.6rem;
  font-weight: 400;
  color: white;
`;

const DropDownArrow = styled.span`
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

const ReviewHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const CommentTitle = styled.h5`
  color: white;
  font-size: 1.6rem;
  font-weight: 400;
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
  font-size: 1.2rem;
  font-weight: 400;
  /* text-align: justify; */
`;


const AddReviewContainer = styled.div`
  display: flex;
  color: white;
  align-items: center;
`;
const AccountCircleIconContainer = styled.div`
  padding-right: 1rem;
`;
const ReviewTextAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1b2b3a;
  border-radius: 10px;
  width: 100%;
`;
const ReviewTextField = styled.textarea`
  border: 1px solid #1b2b3a;
  background-color: #1b2b3a;
  font-family: inherit;
  font-size: 1.2rem;
  padding: 2px 10px;
  color: var(--font-secondary-color);
  border: none;
  outline: none;
  border-radius: 10px;

  display: block;
  width: 100%;
  overflow: hidden;
  resize: both;
  min-height: 1.2rem;
  line-height: 30px;
`;
const ReviewButton = styled.button`
  border: none;
  outline: none;
  text-decoration: none;
  background-color: #1b2b3a;
  color: white;
  padding: 10px;
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--secondary);
`;

function TitlePageContents({ movieData, tvData }) {
  const [synopsis, setSynopsis] = useState("");
  const [isSynopsisOpen, setIsSynopsisOpen] = useState(false);

  let shortSynopsis;

  if (movieData) {
    shortSynopsis = `${movieData.overview.slice(0, 150)}...`;
  }

  if (tvData) {
    shortSynopsis = `${tvData.overview.slice(0, 150)}...`;
  }

  useEffect(() => {
    setSynopsis(shortSynopsis);
  }, [shortSynopsis]);

  function toggleFullSynopsis(e) {
    e.preventDefault;
    setIsSynopsisOpen((prevSynopsisIsOpen) => !prevSynopsisIsOpen);
  }

  useEffect(() => {
    if (isSynopsisOpen === true) {
      if (movieData) {
        setSynopsis(movieData.overview);
      }
      if (tvData) {
        setSynopsis(tvData.overview);
      }
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

  // Reviews section
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  function toggleReviewsOpen(e) {
    e.preventDefault;
    setIsReviewsOpen((prevIsReviewsOpen) => !prevIsReviewsOpen);
  }

  return (
    <TitlePageContentContainer>
      <TitlePageTitleContainer>
        {movieData && <Title>{movieData.title}</Title>}
        {tvData && <Title>{tvData.title}</Title>}
        {movieData && (
          <TitlePageStatsContainer>{`${movieData.release_date
            .toString()
            .slice(0, 4)} | ${movieData.genres[0].name} | ${
            movieData.runtime
          } mins | TMDb Score: ${
            movieData.vote_average
          }`}</TitlePageStatsContainer>
        )}
        {tvData && (
          <TitlePageStatsContainer>{`${tvData.first_air_date
            .toString()
            .slice(0, 4)} | ${tvData.genres[0].name} | ${
            tvData.episode_run_time
          } mins | TMDb Score: ${
            tvData.vote_average
          }`}</TitlePageStatsContainer>
        )}
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
        {/* WATCH ON */}
        <WatchOnContainer onClick={toggleWatchOnOpen}>
          <WatchOnText>Watch on:</WatchOnText>
          <DropDownArrow>
            {isWatchOnOpen ? (
              <ArrowDropUpIcon fontSize="large" />
            ) : (
              <ArrowDropDownIcon fontSize="large" />
            )}
          </DropDownArrow>
        </WatchOnContainer>

        {isWatchOnOpen && (
          <WatchOnIconContainer>
            <Image src={GooglePlayIcon} alt="Google Play Icon" />
            <Image src={YouTubeIcon} alt="YouTube Icon" />
            <Image src={AmazonIcon} alt="Amazon Icon" />
          </WatchOnIconContainer>
        )}
        <NavHR />
        {/* COMMENTS */}
        {/* Review Section Container (IN PROGRESS - just need to add toggle to it)
           - "Reviews" Header (DONE)
           - Drop down/up arrow */}
        <ReviewHeaderContainer onClick={toggleReviewsOpen}>
          <CommentTitle>
            {`Comments (${Object.values(CommentDummyData).length}):`}
          </CommentTitle>
          <DropDownArrow>
            {isReviewsOpen ? (
              <ArrowDropUpIcon fontSize="large" />
            ) : (
              <ArrowDropDownIcon fontSize="large" />
            )}
          </DropDownArrow>
        </ReviewHeaderContainer>

        {/* When the arrow is clicked
            - We want to display the comments */}
        {isReviewsOpen && (
          <>
            <AddReviewContainer>
              <AccountCircleIconContainer>
                <AccountCircleIcon />
              </AccountCircleIconContainer>
              <ReviewTextAndButtonContainer>
                <ReviewTextField placeholder="Leave a review..."></ReviewTextField>
                <ReviewButton>Post</ReviewButton>
              </ReviewTextAndButtonContainer>
            </AddReviewContainer>
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
          </>
        )}
      </TitlePageTitleContainer>
    </TitlePageContentContainer>
  );
}

export default TitlePageContents;