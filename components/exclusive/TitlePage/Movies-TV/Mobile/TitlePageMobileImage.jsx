import Image from "next/image";
import styled from "styled-components";

const TitleImageMobileContainer = styled.div`
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100vw;
  height: 70vh;
`;

function TitleImageMobile({ movieData, tvData }) {
  return (
    <TitleImageMobileContainer>
      {movieData && (
        <Image
          src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
          layout="fill"
          alt="Title Image--Mobile"
        ></Image>
      )}
      {tvData && (
        <Image
          src={`https://image.tmdb.org/t/p/original${tvData.poster_path}`}
          layout="fill"
          alt="Title Image--Mobile"
        ></Image>
      )}
    </TitleImageMobileContainer>
  );
}

export default TitleImageMobile;
