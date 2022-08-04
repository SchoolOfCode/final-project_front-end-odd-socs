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

import { getMovieNewReleases } from "../../../api-routes/api-TMDb";

function NewReleasesMovies() {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const [movieNewReleases, setMovieNewReleases] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovieNewReleases(setIsLoading, setMovieNewReleases);
  }, []);

  return (
    <>
      <SectionTitle>New Releases</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {isLoading
          ? null
          : movieNewReleases.map((movie, key) => {
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

export default NewReleasesMovies;
