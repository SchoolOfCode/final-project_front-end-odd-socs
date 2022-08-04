import styled from "styled-components";
import Image from "next/image";
import {
  TitleText,
  SectionTitle,
} from "../../../components/universal/Text.styles";

import {
  RowContainer,
  TitleContainer,
  ImageContainer,
} from "../../universal/Containers.styles";

import { getTop10Games } from "../../../api-routes/api-rawg";

import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function TopGames() {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const [top10Games, setTop10Games] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTop10Games(setIsLoading, setTop10Games);
  }, []);

  return (
    <>
      <SectionTitle>Top 10 Video Games</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {isLoading
          ? null
          : top10Games.slice(0, 10).map((game, key) => {
              return (
                <TitleContainer key={key}>
                  <ImageContainer>
                    <Image
                      src={game.background_image}
                      objectFit="cover"
                      alt="game"
                      priority
                      width={700}
                      height={1000}
                    ></Image>
                  </ImageContainer>
                  <TitleText>{game.name}</TitleText>
                </TitleContainer>
              );
            })}
      </RowContainer>
    </>
  );
}

export default TopGames;
