import styled from "styled-components";
import Image from "next/image";
import {
  TitleText,
  SectionTitle,
} from "../../../components/universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

import { movies } from "../../../data/home-test-data/home-test-data";

import moviesList from '../../../data/movie-test-data/movies'

let moviesTop10 = moviesList.slice(0, 10);
console.log(moviesTop10)

function TopMovies() {
  return (
    <>
      <SectionTitle>Top 10 Movies</SectionTitle>
      <RowContainer>
        {moviesTop10.map((movie) => {
          return (
            <TitleContainer>
              <ImageContainer>
                <Image
                  src={movie.image}
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

export default TopMovies;
