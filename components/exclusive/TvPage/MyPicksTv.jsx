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
`

function MyPicksTv() {
  //Authentication
  const auth = getAuth();
  const signedInUser = auth.currentUser;

  const [fireDataTv, setFireDataTv] = useState([]);
  const myPicksDbTv = collection(db, "myPicksTv");

  const getPicksData = async () => {
    await getDocs(myPicksDbTv).then((response) => {
      console.log(response)
      setFireDataTv(
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
      <SectionTitle>My Picks - TV</SectionTitle>

      <RowContainer {...events} ref={ref}>
        {fireDataTv.map((picksData, key) => {
          return (
            <>
              {signedInUser.uid === picksData.userID.uid && (
                <MyPicksTitleContainer key={key}>
                  <Link href={`/title/tv/${picksData.TvId}`}>
                    <a>
                      <ImageContainer>
                        <Image
                          src={`https://image.tmdb.org/t/p/original${picksData.TvImage}`}
                          layout="fill"
                          alt={picksData.TvTitle}
                          priority={true}
                        />
                      </ImageContainer>
                    </a>
                  </Link>
                  <TitleText>{picksData.TvTitle}</TitleText>
                </MyPicksTitleContainer>
              )}
            </>
          );
        })}
      </RowContainer>
    </>
  );
}

export default MyPicksTv;






// function MyPicksTv() {
//   return (
//     <>
//       <SectionTitle>My Picks - TV</SectionTitle>
//       <RowContainer>
//         {/* {moviesTop10.map((movie,key) => {
//           return (
//             <TitleContainer key={key}>
//               <ImageContainer>
//                 <Image
//                   src={`${movie.image.split("_")[0]}@.jpg`}
//                   style={{ zIndex: -1 }}
//                   layout="fill"
//                   alt={movie.title}
//                 ></Image>
//               </ImageContainer>
//               <TitleText>{movie.title}</TitleText>
//             </TitleContainer>
//           );
//         })} */}
//       </RowContainer>
//     </>
//   );
// }

// export default MyPicksTv;