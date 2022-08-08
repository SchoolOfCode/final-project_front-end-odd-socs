import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import {
  TitleText,
  SectionTitle,
} from "../../../components/universal/Text.styles";

import {
  // RowContainer,
  TitleContainer,
  ImageContainer,
} from "../../universal/Containers.styles";

import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const MusicImageContainer = styled(ImageContainer)`
  width: 8rem;
  height: 8rem;
`;

export const MusicRowContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  max-width: 95%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

function TopMusic({ topMusic }) {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <>
      <SectionTitle>Top 10 Music</SectionTitle>
      <MusicRowContainer {...events} ref={ref}>
        {/* {topMusic.map(function (key) {
          console.log(top10Music.image[3]["#text"]);
          return (
            <TitleContainer key={key}>
              <Link href="/title">
                <a>
                  <MusicImageContainer>
                    <Image
                      src={top10Music.image[3]["#text"]}
                      layout="fill"
                      alt={top10Music.title}
                      priority
                    />
                  </MusicImageContainer>
                </a>
              </Link>
              <TitleText>{top10Music.title}</TitleText>
            </TitleContainer>
          );
        })} */}
      </MusicRowContainer>
    </>
  );
}

export default TopMusic;
