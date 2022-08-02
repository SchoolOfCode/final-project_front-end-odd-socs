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

// import { music } from "../../../data/home-test-data/home-test-data";
import moviesList from "../../../data/movie-test-data/movies";

const MusicImageContainer = styled(ImageContainer)`
  width: 8rem;
  height: 8rem;
`;

function TopMusic() {

  const musicTop10 = moviesList.slice(21, 30);
  return (
    <>
      <SectionTitle>Top 10 Music</SectionTitle>
      <RowContainer>
        {musicTop10.map((music,key) => {
          return (
            <TitleContainer key={key}>
              <MusicImageContainer>
                <Image
                  src={`${music.image.split("_")[0]}@.jpg`}
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
