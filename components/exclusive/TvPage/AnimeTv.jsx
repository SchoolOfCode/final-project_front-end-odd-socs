import styled from "styled-components";
import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

import { getTVAnimeGenre } from "../../../api-routes/api-TMDb";

import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function AnimeTv() {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const [tvAnimeGenre, setTVAnimeGenre] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTVAnimeGenre(setIsLoading, setTVAnimeGenre);
  }, []);
  return (
    <>
      <SectionTitle>Animation</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {isLoading
          ? null
          : tvAnimeGenre.map((tv, key) => {
              return (
                <TitleContainer key={key}>
                  <ImageContainer>
                    <Image
                      src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
                      layout="fill"
                      alt={tv.title}
                      priority
                    ></Image>
                  </ImageContainer>
                  <TitleText>{tv.name}</TitleText>
                </TitleContainer>
              );
            })}
      </RowContainer>
    </>
  );
}

export default AnimeTv;
