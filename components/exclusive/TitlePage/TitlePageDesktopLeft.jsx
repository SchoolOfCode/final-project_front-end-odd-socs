import styled from "styled-components";
import Image from "next/image";

import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";

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
  z-index: -1;
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

function TitlePageDesktopLeft({movieInfo}) {
  const imageUrl = `${movieInfo.image.split('_')[0]}@.jpg`

  return (
    <TitlePageLeftContainer>
      <TitleImageContainer>
        <Image src={imageUrl} layout="fill" quality={100}></Image>
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
  );
}

export default TitlePageDesktopLeft;
