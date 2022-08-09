import styled from "styled-components";
import Image from "next/image";

import AddCommentIcon from "@mui/icons-material/AddComment";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import { app, db } from "../../../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";  


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

const TitlePageIconLabel = styled.h6`
  color: var(--font-secondary-color);
  font-weight: 400;
  font-size: 0.9rem;
`;

function handler() {
  console.log("clicked");
}

function TitlePageDesktopLeft({ movieData, tvData }) {

  //setting up our database table
  const myPicksDb = collection(db, "myPicks");

  //creating a function that adds the title to myPicks

  function addMyPick(){
    //post request
    addDoc(myPicksDb, { 
      movieId:`${movieData.id}`,
      title: `${movieData.title}`,
      image: `https://image.tmdb.org/t/p/original${movieData.poster_path}`,
      
     }).then(() => {
      alert("data sent")
     })
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
          <BeenhereIcon onClick={addMyPick} fontSize="large" />
          <TitlePageIconLabel>Picks</TitlePageIconLabel>
        </TitleIconContainer>
        <TitleIconContainer tabIndex={3}>
          <BookmarkBorderIcon fontSize="large" />
          <TitlePageIconLabel>Watchlist</TitlePageIconLabel>
        </TitleIconContainer>
        <TitleIconContainer tabIndex={4}>
          <ShareIcon fontSize="large" />
          <TitlePageIconLabel>Share</TitlePageIconLabel>
        </TitleIconContainer>
      </TitleIconsContainer>
    </TitlePageLeftContainer>
  );
}

export default TitlePageDesktopLeft;
