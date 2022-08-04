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

import { getDocumentaryGenre } from "../../../api-routes/api-TMDb";

function RomComMovies() {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const [documentaryGenre, setDocumentaryGenre] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDocumentaryGenre(setIsLoading, setDocumentaryGenre);
  }, []);

  return (
    <>
      <SectionTitle>Documentary</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {isLoading
          ? null
          : documentaryGenre.map((movie, key) => {
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

export default RomComMovies;
