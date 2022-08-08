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

function IndieGames({indieGames}) {
  const ref = useRef();
  const { events } = useDraggable(ref);


  return (
    <>
      <SectionTitle>Indie</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {indieGames.map((game, key) => {
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

export default IndieGames;
