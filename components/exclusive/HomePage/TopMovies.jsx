import Image from "next/image";
import Link from "next/link";
import {
  TitleText,
  SectionTitle,
} from "../../../components/universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

import moviesList from "../../../data/movie-test-data/movies";

import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

export const moviesTop10 = moviesList.slice(0, 10);

function TopMovies() {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <>
      <SectionTitle>Top 10 Movies</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {moviesTop10.map((movie, key) => {
          return (
            <TitleContainer key={key}>
              <Link href="/title">
                <a>
                  <ImageContainer>
                    <Image
                      src={`${movie.image.split("_")[0]}@.jpg`}
                      layout="fill"
                      style={{ borderRadius: "3px" }}
                      alt={movie.title}
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

export default TopMovies;
