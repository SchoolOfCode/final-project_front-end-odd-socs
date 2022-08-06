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

function DanceMusic({ danceMusic }) {
  return (
    <>
      <SectionTitle>Dance</SectionTitle>
      <RowContainer>
        {danceMusic.slice(0, 20).map((album, key) => {
          return (
            <TitleContainer key={key}>
              <MusicImageContainer>
                <Image
                  src={album.image[2]["#text"]}
                  layout="fill"
                  alt={album.name}
                  priority={true}
                ></Image>
              </MusicImageContainer>
              <TitleText>{album.name}</TitleText>
            </TitleContainer>
          );
        })}
      </RowContainer>
    </>
  );
}

export default DanceMusic;
