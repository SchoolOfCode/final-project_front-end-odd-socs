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

  useEffect(() => {
    const getMovies = async () => {
      const movies = await getTop10Movies();
      console.log(movies);
      setTop10Movies(movies);
    };
    getMovies();
  }, []);

  return (
    <>
      <SectionTitle>Top 10 Movies</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {/* {top10Movies.map((movie, key) => {
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
              <h1>Hello</h1>
              {console.log("working")}
            </TitleContainer>
          );
        })} */}
      </RowContainer>
    </>
  );
}

export default TopMovies;
