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

// import { tv } from "../../../data/home-test-data/home-test-data";
import moviesList from "../../../data/movie-test-data/movies";

function TopTV() {
  const tvTop10 = moviesList.slice(31, 40);
  return (
    <>
      <SectionTitle>Top 10 TV Shows</SectionTitle>
      <RowContainer>
        {tvTop10.map((tv, key) => {
          return (
            <TitleContainer key={key}>
              <ImageContainer>
                <Image src={`${tv.image.split("_")[0]}@.jpg`} layout="fill" alt="tv"></Image>
              </ImageContainer>
              <TitleText>{tv.title}</TitleText>
            </TitleContainer>
          );
        })}
      </RowContainer>
    </>
  );
}

export default TopTV;
