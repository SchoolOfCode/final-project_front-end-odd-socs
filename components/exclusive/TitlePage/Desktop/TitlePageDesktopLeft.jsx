import styled from "styled-components";
import Image from "next/image";


import AddCommentIcon from "@mui/icons-material/AddComment";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";



const TitlePageLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  min-width: 18rem;
`;
const TitleImageContainer = styled.div`
  height: 
  100%;
  position: relative;
  z-index: -1;
  display: flex;
  justify-content: flex-start;
`;

const TitleIconsContainer = styled.div`
  width: 100%;
  height: 10%;
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

function TitlePageDesktopLeft({ movieInfo }) {
  const imageUrl = `${movieInfo.image.split("_")[0]}@.jpg`;

  return (
    <TitlePageLeftContainer>
      <TitleImageContainer>
        <Image src={imageUrl} layout="fill" objectFit="contain"></Image>
      </TitleImageContainer>
      <TitleIconsContainer>
        <TitleIconContainer tabIndex={1}>
          <AddCommentIcon fontSize="large"/>
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

export default TitlePageDesktopLeft;
