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

import { getTop10Movies } from "../../../api-routes/api-TMDb";

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
          : top10Movies.slice(0, 10).map((movie, key) => {
              return (
                <TitleContainer key={key}>
                  <Link href="/title">
                    <a>
                      <ImageContainer>
                        <Image
                          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                          layout="fill"
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
