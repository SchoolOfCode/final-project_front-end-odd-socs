import styled from "styled-components";
import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";

import { getHorrorGenre } from "../../../api-routes/api-TMDb";

function HorrorMovies() {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const [horrorGenre, setHorrorGenre] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getHorrorGenre(setIsLoading, setHorrorGenre);
  }, []);
  return (
    <>
      <SectionTitle>Horror</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {isLoading
          ? null
          : horrorGenre.map((movie, key) => {
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

export default HorrorMovies;
