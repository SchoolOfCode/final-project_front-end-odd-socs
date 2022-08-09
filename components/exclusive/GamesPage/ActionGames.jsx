import styled from "styled-components";
import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function ActionGames({ actionGames }) {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <>
      <SectionTitle>Action</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {actionGames.map((game, key) => {
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

export default ActionGames;
