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

// import { games } from "../../../data/home-test-data/home-test-data";
import moviesList from "../../../data/movie-test-data/movies";

function TopGames() {
  const gamesTop10 = moviesList.slice(11, 20);
  return (
    <>
      <SectionTitle>Top 10 Video Games</SectionTitle>
      <RowContainer>
        {gamesTop10.map((game,key) => {
          return (
            <TitleContainer key={key}>
              <ImageContainer>
                <Image
                  src={`${game.image.split("_")[0]}@.jpg`}
                  layout="fill"
                  style={{ zIndex: -1 }}
                  alt="game"
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
