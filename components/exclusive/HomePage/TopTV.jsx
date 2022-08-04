import styled from "styled-components";
import Image from "next/image";
import {
  TitleText,
  SectionTitle,
} from "../../../components/universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

import { getTop10TV } from "../../../api-routes/api-TMDb";

import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function TopTV() {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const [top10TV, setTop10TV] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTop10TV(setIsLoading, setTop10TV);
  }, []);

  return (
    <>
      <SectionTitle>Top 10 TV Shows</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {isLoading
          ? null
          : top10TV.slice(0, 10).map((tv, key) => {
              return (
                <TitleContainer key={key}>
                  <ImageContainer>
                    <Image
                      src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
                      layout="fill"
                      alt="tv"
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

export default TopTV;
