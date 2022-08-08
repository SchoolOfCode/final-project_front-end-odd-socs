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

import { musiclist } from "../../../public/music-data/music-data";

import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const MusicImageContainer = styled(ImageContainer)`
  width: 12rem;
  height: 12rem;
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
        {topMusic.slice(0, 10).map((album, key) => {
          return (
            <TitleContainer key={key}>
              <Link
                href={`/title/music/${album.artist.name.replace(
                  /\s/g,
                  "+"
                )}-${album.name.replace(/\s/g, "+")}`}
              >
                <a>
                  <MusicImageContainer>
                    <Image
                      src={album.image[3]["#text"]}
                      layout="fill"
                      alt={album.name}
                      priority
                    />
                  </MusicImageContainer>
                </a>
              </Link>
              <TitleText>{album.name}</TitleText>
            </TitleContainer>
          );
        })}
      </MusicRowContainer>
    </>
  );
}

export default TopMusic;
