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
`;

import moviesList from "../../../data/movie-test-data/movies";

let moviesTop10 = moviesList.slice(150, 180);

function GenresHorror() {
  return (
    <>
      <SectionTitle>Horror</SectionTitle>
      <RowContainerWrap>
        {moviesTop10.map((movie) => {
          return (
            <TitleContainer>
              <ImageContainer>
                <Image
                  src={`${movie.image.split("_")[0]}@.jpg`}
                  style={{ zIndex: -1 }}
                  layout="fill"
                ></Image>
              </ImageContainer>
              <TitleText>{movie.title}</TitleText>
            </TitleContainer>
          );
        })}
      </RowContainerWrap>
      
    </>
  );
}

export default GenresHorror;
