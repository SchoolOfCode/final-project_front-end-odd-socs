import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";


//Firebase imports
import { app, db } from "../../../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { onAuthStateChanged, getAuth } from "firebase/auth";

// ICON IMPORTS
import AddCommentIcon from "@mui/icons-material/AddComment";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import SocialFacebook from "../../../social/SocialFacebook";
import SocialReddit from "../../../social/SocialReddit";
import SocialTwitter from "../../../social/SocialTwitter";
import SocialWhatsApp from "../../../social/SocialWhatsApp";


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

function TitlePageDesktopLeft({ movieData, tvData, tvList }) {
  //setting up our database table
  const myPicksDb = collection(db, "myPicks");
  const myPicksDbTv = collection(db, "myPicksTv");


  //AUTHENTICATION
  //Initialising authentication
  const auth = getAuth();
  //Creating a state so we can capture the user's uid
  const [userIdState, setUserIdState] = useState("");

  // let's check if the user is logged in
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserIdState({ uid });
      }
    });
  }, []);

  //creating a function that adds the title to myPicks
  function addMyPick() {
    if(movieData) {
    //post request
    addDoc(myPicksDb, {
      movieId: `${movieData.id}`,
      title: `${movieData.title}`,
      image: `https://image.tmdb.org/t/p/original${movieData.poster_path}`,
      userID: userIdState,
    
    })
      .then(() => {
        console.log("data sent");
      })
      .catch((err) => {
        console.log("Data has not been sent");
    });
  } else {
    addDoc(myPicksDbTv, {
      TvId: `${tvData.id}`,
      TvTitle: `${tvData.name}`,
      TvImage: `https://image.tmdb.org/t/p/original${tvData.poster_path}`,
      userID: userIdState,
    })
      .then(() => {
        console.log("data sent");
      })
      .catch((err) => {
        console.log("Data has not been sent");
      });
  }}

//modalhandler functions

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
          <AddCommentIcon fontSize="large" />
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


