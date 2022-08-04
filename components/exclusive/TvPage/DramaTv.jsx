import styled from "styled-components";
import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

import { getTVDramaGenre } from "../../../api-routes/api-TMDb";

import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function DramaTv() {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const [tvDramaGenre, setTVDramaGenre] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTVDramaGenre(setIsLoading, setTVDramaGenre);
  }, []);

  return (
    <>
      <SectionTitle>Drama</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {isLoading
          ? null
          : tvDramaGenre.map((tv, key) => {
              return (
                <TitleContainer key={key}>
                  <ImageContainer>
                    <Image
                      src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
                      layout="fill"
                      alt={tv.title}
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

export default DramaTv;
