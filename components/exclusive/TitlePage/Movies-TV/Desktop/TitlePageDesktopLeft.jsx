import styled from "styled-components";
import Image from "next/image";

import AddCommentIcon from "@mui/icons-material/AddComment";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";

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
  font-size: large;

  &:hover {
    color: var(--secondary);
  }

  &:focus {
    color: var(--secondary);
  }
`;

function handler() {
  console.log("clicked");
}

function TitlePageDesktopLeft({ movieData, tvData }) {
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
