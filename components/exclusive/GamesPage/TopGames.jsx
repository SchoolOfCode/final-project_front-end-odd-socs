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

import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function TopGames({ topGames }) {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <>
      <SectionTitle>Top 10 Video Games</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {topGames.slice(0, 10).map((game, key) => {
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
