/**
 * have row container dynamicly grow with content amount, flowing onto a new layer after every 10'th title
 *
 */

import styled from "styled-components";
import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

export const RowContainerWrap = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  border: 1px solid green;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
`;
const GenreTitleContainer = styled(
  TitleContainer
)`
width: 10rem;
`

import moviesList from "../../../../public/movie-data/movie-data";

let moviesTop10 = moviesList.slice(150, 180);

function GenresHorror() {
  return (
    <>
      <SectionTitle>Horror</SectionTitle>
      <RowContainerWrap>
        {moviesTop10.map((movie, key) => {
          return (
            <GenreTitleContainer key={key}>
              <ImageContainer>
                <Image
                  src={`${movie.image.split("_")[0]}@.jpg`}
                  style={{ zIndex: -1 }}
                  layout="fill"
                  alt={movie.title}
                ></Image>
              </ImageContainer>
              <TitleText>{movie.title}</TitleText>
            </GenreTitleContainer>
          );
        })}
      </RowContainerWrap>
    </>
  );
}

export default GenresHorror;
