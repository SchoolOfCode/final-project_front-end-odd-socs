import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function FPSGames({ fpsGames }) {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <>
      <SectionTitle>First Person Shooters</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {fpsGames.map((game, key) => {
          return (
            <TitleContainer key={key}>
              <Link href={`/title/games/${game.id}`}>
                <a>
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
                </a>
              </Link>
              <TitleText>{game.name}</TitleText>
            </TitleContainer>
          );
        })}
      </RowContainer>
    </>
  );
}

export default FPSGames;
