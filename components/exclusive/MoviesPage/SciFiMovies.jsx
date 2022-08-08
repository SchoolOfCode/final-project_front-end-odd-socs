import styled from "styled-components";
import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function SciFiMovies({ scifiMovies }) {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <>
      <SectionTitle>Sci-Fi & Fantasy</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {scifiMovies.map((movie, key) => {
          return (
            <TitleContainer key={key}>
              <ImageContainer>
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  layout="fill"
                  alt={movie.title}
                  priority
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

export default SciFiMovies;
