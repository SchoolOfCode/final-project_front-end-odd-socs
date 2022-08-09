import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function RandomMovies({ randomMovies }) {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <>
      <SectionTitle>Random Movies</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {randomMovies.map((movie, key) => {
          return (
            <TitleContainer key={key}>
              <Link href={`/title/movies/${movie.id}`}>
                <a>
                  <ImageContainer>
                    <Image
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      layout="fill"
                      alt={movie.title}
                      priority={true}
                    />
                  </ImageContainer>
                </a>
              </Link>
              <TitleText>{movie.title}</TitleText>
            </TitleContainer>
          );
        })}
      </RowContainer>
    </>
  );
}

export default RandomMovies;
