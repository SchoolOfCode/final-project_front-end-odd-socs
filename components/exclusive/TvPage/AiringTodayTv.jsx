import styled from "styled-components";
import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

import { getAiringToday } from "../../../api-routes/api-TMDb";

import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function NinetiesShows() {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const [airingToday, setAiringToday] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAiringToday(setIsLoading, setAiringToday);
  }, []);

  return (
    <>
      <SectionTitle>Airing Today</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {isLoading
          ? null
          : airingToday.map((tv, key) => {
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

export default NinetiesShows;
