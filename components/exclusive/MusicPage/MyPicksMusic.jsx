import styled from "styled-components";
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
  RowContainer,
  TitleContainer,
  ImageContainer,
} from "../../universal/Containers.styles";
// import { ConstructionOutlined } from "@mui/icons-material";
import Link from "next/link";

const MusicImageContainer = styled(ImageContainer)`
  width: 8rem;
  height: 8rem;
`;

function MyPicksMusic() {
  //Authentication
  const auth = getAuth();
  const signedInUser = auth.currentUser;

  const [fireData, setFireData] = useState([]);
  const myPicksDbMusic = collection(db, "myPicksmusic");

  const getPicksData = async () => {
    await getDocs(myPicksDbMusic).then((response) => {
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
      <SectionTitle>My Picks - Music</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {fireData.map((picksData, key) => {
          return (
            <>
              {signedInUser.uid === picksData.userID.uid && (
                <TitleContainer key={key}>
                  <MusicImageContainer>
                    <Link
                      href={`/title/music/${picksData.Artist.replace(
                        /\s/g,
                        "+"
                      )}-${picksData.Album.replace(/\s/g, "+")}`}
                    >
                      <a>
                        <Image
                          src={picksData.MusicImage}
                          layout="fill"
                          style={{ zIndex: -1 }}
                          alt={picksData.Album}
                        ></Image>
                        
                      </a>
                    </Link>
                  </MusicImageContainer>
                  <TitleText>{picksData.Album}</TitleText>
                </TitleContainer>
              )}
            </>
          );
        })}
      </RowContainer>
    </>
  );
}

export default MyPicksMusic;
