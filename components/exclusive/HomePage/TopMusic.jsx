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

const MusicImageContainer = styled(ImageContainer)`
  width: 8rem;
  height: 8rem;
`;

function TopMusic() {
  return (
    <>
      <SectionTitle>Top 10 Music</SectionTitle>
      <RowContainer>
        {music.map((music) => {
          return (
            <TitleContainer>
              <MusicImageContainer>
                <Image
                  src={music.image.src}
                  layout="fill"
                  style={{ zIndex: -1 }}
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
