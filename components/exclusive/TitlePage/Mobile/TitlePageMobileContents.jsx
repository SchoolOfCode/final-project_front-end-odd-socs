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

import GooglePlayIcon from "../../../../assets/WatchIcons/google.png";
import YouTubeIcon from "../../../../assets/WatchIcons/YT-White.png";
import AmazonIcon from "../../../../assets/WatchIcons/APV-White.png";

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
  font-size: 1.6rem;
  font-weight:400;
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
  font-weight:400;
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
  display:flex;
  color: white;
  align-items: center;
`
const AccountCircleIconContainer = styled.div `
padding-right:1rem;
`
const ReviewTextAndButtonContainer = styled.div `
display:flex;
justify-content: space-between;
align-items: center;
background-color:#1B2B3A;
border-radius: 10px;
width: 100%;
`
const ReviewTextField = styled.textarea`
  border: 1px solid #1B2B3A;
  background-color:#1B2B3A;
  font-family: inherit;
  font-size: 1.2rem;
  padding: 2px 10px;
  color:var(--font-secondary-color);
  border: none;
  outline:none;
  border-radius: 10px;

  
  display: block;
  width: 100%;
  overflow: hidden;
  resize: both;
  min-height: 1.2rem;
  line-height:30px;
`
const ReviewButton = styled.button `
  border: none;
  outline:none;
  text-decoration: none;
  background-color:#1B2B3A;
  color: white;
  padding: 10px;
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--secondary);
`

function TitlePageContents({ movieInfo }) {
  const [synopsis, setSynopsis] = useState("");
  const [isSynopsisOpen, setIsSynopsisOpen] = useState(false);
  const shortSynopsis = `${movieInfo.plot.slice(0, 150)}...`;

  useEffect(() => {
    setSynopsis(shortSynopsis);
  }, [shortSynopsis]);

  function toggleFullSynopsis(e) {
    e.preventDefault;
    setIsSynopsisOpen((prevSynopsisIsOpen) => !prevSynopsisIsOpen);
  }

  useEffect(() => {
    if (isSynopsisOpen === true) {
      setSynopsis(movieInfo.plot);
    }
  }, [isSynopsisOpen, movieInfo.plot]);

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
            {`Comments (${
            Object.values(CommentDummyData).length
          }):`}</CommentTitle>
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

/* 1. CREATE STATE (DONE)
const [isWatchOnOpen, setIsWatchOnOpen] = useState(false);

*/

/* 2. CREATE TOGGLE FUNCTION (DONE)
function toggleWatchOnOpen(e) {
    e.preventDefault;
    setIsWatchOnOpen((prevIsWatchOnOpen) => !prevIsWatchOnOpen);
  }

  - Add the toggle function as an onClick thingy to the MyAccountContainer
*/

/* 3. ARROW (Changes the arrow from drop up to drop down) (DONE)
- Remember to import the arrows from mui library

    <WatchOnArrow>
                {isWatchOnOpen ? (
                <ArrowDropUpIcon fontSize="large" />
                ) : (
                <ArrowDropDownIcon fontSize="large" />
                )}
    </WatchOnArrow>
*/

/* 4. RENDERING STUFF INSIDE DROP DOWN 
If reviews is open, render these components 

  PLAN - add a review text area
  - add review container
    - profile icon
    - text area

    <p><span class="textarea" role="textbox" contenteditable></span></p>
    
    const ReviewTextField = styled.span`
        
    `
    

    - submit button (icon)


    

*/


/* 5. STYLING (STYLED DIVS)
For each of our components we need to create a styled.div
Here's what Matt prepared earlier

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
*/



/* REVIEW TEXT AREA CSS

.textarea {
  border: 1px solid #ccc;
  font-family: inherit;
  font-size: inherit;
  padding: 1px 6px;

  display: block;
  width: 100%;
  overflow: hidden;
  resize: both;
  min-height: 40px;
  line-height: 20px;
}

.textarea[contenteditable]:empty::before {
  content: "Write a review...";
  color: gray;
}


* {
  box-sizing: border-box;
}
body {
  font-family: "Heebo", sans-serif;
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
}

p strong {
  display: block;
}

*/