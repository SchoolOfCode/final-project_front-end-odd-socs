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

import { getComedyGenre } from "../../../api-routes/api-TMDb";

function ComedyMovies() {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const [comedyGenre, setComedyGenre] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComedyGenre(setIsLoading, setComedyGenre);
  }, []);
  return (
    <>
      <SectionTitle>Comedy</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {isLoading
          ? null
          : comedyGenre.map((movie, key) => {
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

export default ComedyMovies;
