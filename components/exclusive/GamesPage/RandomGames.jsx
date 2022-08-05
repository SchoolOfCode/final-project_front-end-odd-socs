import styled from "styled-components";
import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

import { getRandomGames } from "../../../api-routes/api-rawg";

import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function RandomGames() {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const [randomGames, setRandomGames] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(Math.floor(Math.random() * 100));

  const pageNumberUpdater = () => {
    setPageNumber(Math.floor(Math.random() * 100));
  };

  useEffect(() => {
    getRandomGames(setIsLoading, setRandomGames, pageNumber);
    pageNumberUpdater();
  }, []);

  return (
    <>
      <SectionTitle>Random</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {isLoading
          ? null
          : randomGames.map((game, key) => {
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

export default RandomGames;
