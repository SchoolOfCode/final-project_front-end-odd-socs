import styled from "styled-components";
import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  RowContainer,
  TitleContainer,
  ImageContainer,
} from "../../universal/Containers.styles";

import { music } from "../../../data/home-test-data/home-test-data";
import moviesList from "../../../data/movie-test-data/movies";

const MusicImageContainer = styled(ImageContainer)`
  width: 8rem;
  height: 8rem;
`;
let moviesTop10 = moviesList.slice(210, 220);

function NintiesMusic() {
  return (
    <>
      <SectionTitle>90&apos;s Hits</SectionTitle>
      <RowContainer>
        {moviesTop10.map((movie,key) => {
          return (
            <TitleContainer key={key}>
              <MusicImageContainer>
                <Image
                  src={`${movie.image.split("_")[0]}@.jpg`}
                  layout="fill"
                  style={{ zIndex: -1 }}
                  alt={movie.title}
                ></Image>
              </MusicImageContainer>
              <TitleText>{movie.title}</TitleText>
            </TitleContainer>
          );
        })}
      </RowContainer>
    </>
  );
}

export default NintiesMusic;
