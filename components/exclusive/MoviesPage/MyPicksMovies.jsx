import styled from "styled-components";
import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

//imports for the backend
import { app, db } from "../../../firebase/config";
import { collection, getDocs, doc } from "firebase/firestore"
import { useEffect, useState } from "react";

//Import for the carousel
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

//Imports for the containers
import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";
import { ConstructionOutlined } from "@mui/icons-material";
import Link from "next/link";

/* PLAN
  - create a state to store our data that we've retrieved from firebase (DONE)
  - connect to the right database (DONE)
  - create our fucntion for our GET request (DONE)
  - display the data in the jsx 
  - run our function when the user first goes onto the mypicks page (useEffect) (DONE)
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

  //For the carousel
  const ref = useRef();
  const { events } = useDraggable(ref);


  return (
    <>
      {/* {fireData.map((picksData, key)=>{
        return(
          <div key={key}>
          <h1>{picksData.title}</h1>
          <h1>{picksData.movieId}</h1>
          <h1>{picksData.image}</h1>  
          </div>
        )
      })
    } */}
      <SectionTitle>My Picks - Movies</SectionTitle>
      <RowContainer {...events} ref={ref}>

        {fireData.map((picksData, key)=>{
          return (
            <TitleContainer key={key}>
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
            </TitleContainer>
          );
        })}
      </RowContainer>
    </>
  );
}

export default MyPicksMovies;
