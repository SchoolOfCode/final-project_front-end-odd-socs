import styled from "styled-components";
import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";



function MyPicksTv() {
  return (
    <>
      <SectionTitle>My Picks - TV</SectionTitle>
      <RowContainer>
        {moviesTop10.map((movie,key) => {
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
        })}
      </RowContainer>
    </>
  );
}

export default MyPicksTv;