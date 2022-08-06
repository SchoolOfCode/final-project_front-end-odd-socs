import styled from "styled-components";
import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";



function MyPicksGames() {
  return (
    <>
      <SectionTitle>My Picks - Games</SectionTitle>
      <RowContainer>
        {/* {moviesTop10.map((movie,key) => {
          return (
            <TitleContainer key={key}>
              <ImageContainer>
                <Image
                  src={`${movie.image.split("_")[0]}@.jpg`}
                  style={{ zIndex: -1 }}
                  layout="fill"
                  alt={movie.title}
                ></Image>
              </ImageContainer>
              <TitleText>{movie.title}</TitleText>
            </TitleContainer>
          );
        })} */}
      </RowContainer>
    </>
  );
}

export default MyPicksGames;