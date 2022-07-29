import styled from "styled-components";
import Image from "next/image";
import {
  TitleText,
  SectionTitle,
} from "../../universal/Text.styles";

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
let moviesTop10 = moviesList.slice(100, 110);
console.log(moviesTop10);



function ListenListMusic() {
  return (
    <>
      <SectionTitle>Listen List - Music</SectionTitle>
      <RowContainer>
        {moviesTop10.map((movie) => {
          return (
            <TitleContainer>
              <MusicImageContainer>
                <Image
                  src={`${movie.image.split("_")[0]}@.jpg`}
                  layout="fill"
                  style={{ zIndex: -1 }}
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

export default ListenListMusic;