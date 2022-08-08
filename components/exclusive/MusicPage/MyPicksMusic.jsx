import styled from "styled-components";
import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  RowContainer,
  TitleContainer,
  ImageContainer,
} from "../../universal/Containers.styles";


const MusicImageContainer = styled(ImageContainer)`
  width: 8rem;
  height: 8rem;
`;


function MyPicksMusic() {
  return (
    <>
      <SectionTitle>My Picks - Music</SectionTitle>
      <RowContainer>
        {/* {moviesTop10.map((movie,key) => {
          return (
            <TitleContainer key={key}>
              <MusicImageContainer>
                <Image
                  src={`${movie.image.split("_")[0]}@.jpg`}
                  layout="fill"
                  style={{ zIndex: -1 }}
                  alt={movie.title}
                ></Image>
              </MusicImageContainer>
              <TitleText>{movie.title}</TitleText>
            </TitleContainer>
          );
        })} */}
      </RowContainer>
    </>
  );
}

export default MyPicksMusic;
