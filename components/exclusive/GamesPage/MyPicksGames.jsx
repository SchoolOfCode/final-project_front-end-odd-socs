import styled from "styled-components";
import Link from "next/link";

import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";
//imports for the backend
import { app, db } from "../../../firebase/config";
import { collection, getDocs, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

//Import for the carousel
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

//Authentication imports
import { getAuth } from "firebase/auth";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

const MyPicksTitleContainer = styled(TitleContainer)`
  max-width: 10rem;
`;


function MyPicksGames() {
  //Authentication
  const auth = getAuth();
  const signedInUser = auth.currentUser;

  const [fireData, setFireData] = useState([]);
  const myPicksDbGame = collection(db, "myPicksGame");

  const getPicksData = async () => {
    await getDocs(myPicksDbGame).then((response) => {
      setFireData(
        response.docs.map((picksData) => {
          return { ...picksData.data(), id: picksData.id };
        })
      );
    });
  };

  useEffect(() => {
    getPicksData();
  }, []);

  //For the carousel
  const ref = useRef();
  const { events } = useDraggable(ref);
  return (
    <>
      <SectionTitle>My Picks - Games</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {fireData.map((picksData, key) => {
          return (
            <>
              {signedInUser.uid === picksData.userID.uid && (
                <MyPicksTitleContainer key={key}>
                  <Link href={`/title/games/${picksData.gameId}`}>
                    <a>
                      <ImageContainer>
                        <Image
                          src={picksData.gameImage}
                          layout="fill"
                          alt={picksData.title}
                          priority={true}
                        />
                      </ImageContainer>
                    </a>
                  </Link>
                  <TitleText>{picksData.gameTitle}</TitleText>
                </MyPicksTitleContainer>
              )}
            </>
          );
        })}
      </RowContainer>
    </>
  );
}

export default MyPicksGames;
