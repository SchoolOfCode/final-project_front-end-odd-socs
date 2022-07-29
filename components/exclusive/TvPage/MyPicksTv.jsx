import styled from "styled-components";
import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

// import { movies } from "../../../data/home-test-data/home-test-data";

import moviesList from "../../../data/movie-test-data/movies";

let moviesTop10 = moviesList.slice(220, 230);
console.log(moviesTop10);

function MyPicksTv() {
  return (
    <>
      <SectionTitle>My Picks - TV</SectionTitle>
      <RowContainer>
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
      </RowContainer>
    </>
  );
}

export default MyPicksTv;