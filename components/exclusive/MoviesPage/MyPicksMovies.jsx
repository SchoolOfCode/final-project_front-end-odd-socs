import styled from "styled-components";
import Image from "next/image";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

//imports for the backend
import { app, db } from "../../../firebase/config";
import { collection, getDocs, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

//Import for the carousel
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

//Authentication imports

//Imports for the containers
import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";
// import { ConstructionOutlined } from "@mui/icons-material";
import Link from "next/link";

const MyPicksTitleContainer = styled(TitleContainer)`
  max-width: 10rem;
`;

function MyPicksMovies() {
  const [userIdState, setUserIdState] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserIdState(uid);
      }
    });

  }, []);
  //Authentication.
  const auth = getAuth();
  const signedInUser = auth.currentUser;

  const [fireData, setFireData] = useState([]);
  const myPicksDb = collection(db, `myPicks${userIdState}`);

  const getPicksData = async () => {
    await getDocs(myPicksDb).then((response) => {
      setFireData(
        response.docs.map((picksData) => {
          return { ...picksData.data(), id: picksData.id };
        })
      );
    });
  };
  getPicksData()
  // useEffect(() => {
  //   getPicksData();
  // }, []);

  //For the carousel
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <>
      <SectionTitle>My Picks - Movies</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {fireData.map((picksData, key) => {
          return (
            <>
              <MyPicksTitleContainer key={key}>
                <Link href={`/title/movies/${picksData.movieId}`}>
                  <a>
                    <ImageContainer>
                      <Image
                        src={`https://image.tmdb.org/t/p/original${picksData.image}`}
                        layout="fill"
                        alt={picksData.title}
                        priority={true}
                      />
                    </ImageContainer>
                  </a>
                </Link>
                <TitleText>{picksData.title}</TitleText>
              </MyPicksTitleContainer>
            </>
          );
        })}
      </RowContainer>
    </>
  );
}

export default MyPicksMovies;
