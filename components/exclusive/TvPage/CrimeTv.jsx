import styled from "styled-components";
import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

import { getTVCrimeGenre } from "../../../api-routes/api-TMDb";

import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function CrimeTv() {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const [tvCrimeGenre, setTVCrimeGenre] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTVCrimeGenre(setIsLoading, setTVCrimeGenre);
  }, []);

  return (
    <>
      <SectionTitle>Crime</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {isLoading
          ? null
          : tvCrimeGenre.map((tv, key) => {
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

export default CrimeTv;
