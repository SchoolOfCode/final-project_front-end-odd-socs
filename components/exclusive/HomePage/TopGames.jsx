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

import { games } from "../../../data/home-test-data/home-test-data";


function TopGames() {
  return (
    <>
      <SectionTitle>Top 10 Video Games</SectionTitle>
      <RowContainer>
        {games.map((game,key) => {
          return (
            <TitleContainer key={key}>
              <ImageContainer>
                <Image
                  src={game.image.src}
                  layout="fill"
                  style={{ zIndex: -1 }}
                  alt="movie"
                ></Image>
              </ImageContainer>
              <TitleText>{game.title}</TitleText>
            </TitleContainer>
          );
        })}
      </RowContainer>
    </>
  );
}

export default TopGames;
