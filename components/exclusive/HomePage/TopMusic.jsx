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

import { music } from "../../../data/home-test-data/home-test-data";
import moviesList from "../../../data/movie-test-data/movies";

const MusicImageContainer = styled(ImageContainer)`
  width: 8rem;
  height: 8rem;
`;

function TopMusic() {
  return (
    <>
      <SectionTitle>Top 10 Music</SectionTitle>
      <RowContainer>
        {music.map((music,key) => {
          return (
            <TitleContainer key={key}>
              <MusicImageContainer>
                <Image
                  src={music.image.src}
                  layout="fill"
                  alt="music"
                ></Image>
              </MusicImageContainer>
              <TitleText>{music.title}</TitleText>
            </TitleContainer>
          );
        })}
      </RowContainer>
    </>
  );
}

export default TopMusic;
