import styled from "styled-components";
import Image from "next/image";

import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";

// Whole page container
const TitlePageContainer = styled.div`
  width: 100vw;
  margin-top: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90vh;
`;

// LEFT SIDE CONTAINERS
// Holds image and icons underneath
const TitlePageLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  gap: 1.5rem;
`;
const TitleImageContainer = styled.div`
  width: 15rem;
  height: 22rem;
  position: relative;
  border: 2px solid white;
`;

const TitleIconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
`;

const TitleIconContainer = styled.div`
  font-size: large;

  &:hover {
    color: var(--secondary);
  }

  &:focus {
    color: var(--secondary);
  }
`;

// MID CONTAINERS
// Holds all information on center of page (not comments section)
const TitlePageMidContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// RIGHT CONTAINERS
// Holds comment section
const TitlePageRightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function TitlePageDesktop({ movieInfo }) {
  return (
    <TitlePageContainer>
      <TitlePageLeftContainer>
        <TitleImageContainer>
          <Image src={movieInfo.image} layout="fill"></Image>
        </TitleImageContainer>
        <TitleIconsContainer>
          <TitleIconContainer tabIndex={1}>
            <SentimentVerySatisfiedIcon fontSize="large" />
          </TitleIconContainer>
          <TitleIconContainer tabIndex={2}>
            <MoodBadIcon fontSize="large" />
          </TitleIconContainer>
          <TitleIconContainer tabIndex={3}>
            <BookmarkBorderIcon fontSize="large" />
          </TitleIconContainer>
          <TitleIconContainer tabIndex={4}>
            <ShareIcon fontSize="large" />
          </TitleIconContainer>
        </TitleIconsContainer>
      </TitlePageLeftContainer>
      <TitlePageMidContainer></TitlePageMidContainer>
      <TitlePageRightContainer></TitlePageRightContainer>
    </TitlePageContainer>
  );
}

export default TitlePageDesktop;
