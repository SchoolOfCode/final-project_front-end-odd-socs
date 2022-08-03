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

import { getTop10Movies } from "../../../api-routes/api-template";

import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function TopMovies() {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const [top10Movies, setTop10Movies] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTop10Movies(setIsLoading, setTop10Movies);
  }, []);

  return (
    <>
      <SectionTitle>Top 10 Movies</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {isLoading
          ? null
          : top10Movies.map((movie, key) => {
              return (
                <TitleContainer key={key}>
                  <Link href="/title">
                    <a>
                      <ImageContainer>
                        <Image
                          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                          layout="fill"
                          style={{ borderRadius: "3px" }}
                          alt={movie.title}
                          priority
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
