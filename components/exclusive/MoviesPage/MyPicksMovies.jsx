import styled from "styled-components";
import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";
import { app, db } from "../../../firebase/config";
import { collection, getDocs, doc } from "firebase/firestore"
import { useEffect, useState } from "react";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";
import { ConstructionOutlined } from "@mui/icons-material";

/* PLAN
  - create a state to store our data that we've retrieved from firebase (DONE)
  - connect to the right database (DONE)
  - create our fucntion for our GET request
  - display the data in the jsx 
  - run our function when the user first goes onto the mypicks page (useEffect)
*/ 

function MyPicksMovies() {

  const [fireData, setFireData] = useState([]);
  const myPicksDb = collection(db, "myPicks");

  const getPicksData = async () => { 
    await getDocs(myPicksDb)
    .then((response) => {
      setFireData(response.docs.map((picksData)=>{
        return {...picksData.data(), id:picksData.id}
    }))
    })
  }

  useEffect(() => {
    getPicksData()
    .then(() => {
      console.log(fireData)})
  },[])

  return (
    <>
      <SectionTitle>My Picks - Movies</SectionTitle>
      {/* <RowContainer>
        {moviesTop10.map((movie,key) => {
          return (
            <TitleContainer key={key}>
              <ImageContainer>
                <Image
                  src={`${movie.image.split("_")[0]}@.jpg`}
                  style={{ zIndex: -1 }}
                  layout="fill"
                  alt={movie.title}
                ></Image>
              </ImageContainer>
              <TitleText>{movie.title}</TitleText>
            </TitleContainer>
          );
        })}
      </RowContainer> */}
    </>
  );
}

export default MyPicksMovies;
