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

function TopMovies() {
  return (
    <>
      <SectionTitle>Top 10 Movies</SectionTitle>
      <RowContainer>
        {movies.map((movie) => {
          return (
            <TitleContainer>
              <ImageContainer>
                <Image
                  src={movie.image.src}
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
