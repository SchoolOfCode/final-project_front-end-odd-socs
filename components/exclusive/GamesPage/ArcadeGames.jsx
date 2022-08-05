import styled from "styled-components";
import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

import { getArcadeGames } from "../../../api-routes/api-rawg";

import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function ArcadeGames() {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const [arcadeGames, setArcadeGames] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArcadeGames(setIsLoading, setArcadeGames);
  }, []);

  return (
    <>
      <SectionTitle>Arcade</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {isLoading
          ? null
          : arcadeGames.map((game, key) => {
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

export default ArcadeGames;
