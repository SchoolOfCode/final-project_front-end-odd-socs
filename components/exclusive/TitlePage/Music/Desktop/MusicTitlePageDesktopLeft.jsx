import styled from "styled-components";

import Image from "next/image";
import { useEffect, useState } from "react";

//Firebase imports
import { app, db } from "../../../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { onAuthStateChanged, getAuth } from "firebase/auth";

import {
  TitlePageLeftContainer,
  TitleImageContainer,
  TitleIconsContainer,
  TitleIconContainer,
} from "../../Movies-TV/Desktop/TitlePageDesktopLeft";

import AddCommentIcon from "@mui/icons-material/AddComment";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";

function handler() {
  console.log("clicked");
}

const MusicTitleImageContainer = styled(TitleImageContainer)`
  height: 60%;
`;

const MusicTitlePageLeftContainer = styled(TitlePageLeftContainer)`
  justify-content: flex-start;
  gap: 2rem;
`;

function MusicTitlePageDesktopLeft({ musicData }) {
 
  //setting up our database table
  const myPicksDbmusic = collection(db, "myPicksmusic");

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

  // creating a function that adds the title to myPicks
  function addMyPick() {
    addDoc(myPicksDbmusic, {
      // MusicId: `${musicData.id}`,
      Artist: `${musicData.artist}`,
      Album: `${musicData.name}`,
      MusicImage: `${musicData.image[3]["#text"]}`,
      userID: userIdState,
    })
      .then(() => {
        console.log("data sent");
      })
      .catch((err) => {
        console.log("Data has not been sent");
      });
  }

  return (
    <>
      <MusicTitlePageLeftContainer>
        <MusicTitleImageContainer>
          {musicData.image[3]["#text"] && (
            <Image
              src={musicData.image[3]["#text"]}
              alt="game"
              priority
              layout="fill"
            ></Image>
          )}
        </MusicTitleImageContainer>
        <TitleIconsContainer>
          <TitleIconContainer tabIndex={1}>
            <AddCommentIcon onClick={handler} fontSize="large" />
          </TitleIconContainer>
          <TitleIconContainer tabIndex={2}>
            <BeenhereIcon fontSize="large" onClick={addMyPick} />
          </TitleIconContainer>
          <TitleIconContainer tabIndex={3}>
            <BookmarkBorderIcon fontSize="large" />
          </TitleIconContainer>
          <TitleIconContainer tabIndex={4}>
            <ShareIcon fontSize="large" />
          </TitleIconContainer>
        </TitleIconsContainer>
      </MusicTitlePageLeftContainer>
    </>
  );
}

export default MusicTitlePageDesktopLeft;

//   <MusicTitlePageLeftContainer>
//     <MusicTitleImageContainer>
//       {musicData.image[3]["#text"] && (
//         <Image
//           src={musicData.image[3]["#text"]}
//           alt="game"
//           priority
//           layout="fill"
//         ></Image>
//       )}
//     </MusicTitleImageContainer>
//     <TitleIconsContainer>
//       <TitleIconContainer tabIndex={1}>
//         <AddCommentIcon onClick={handler} fontSize="large" />
//       </TitleIconContainer>
//       <TitleIconContainer tabIndex={2}>
//         <BeenhereIcon fontSize="large" />
//       </TitleIconContainer>
//       <TitleIconContainer tabIndex={3}>
//         <BookmarkBorderIcon fontSize="large" />
//       </TitleIconContainer>
//       <TitleIconContainer tabIndex={4}>
//         <ShareIcon fontSize="large" />
//       </TitleIconContainer>
//     </TitleIconsContainer>
//   </MusicTitlePageLeftContainer>
// );
