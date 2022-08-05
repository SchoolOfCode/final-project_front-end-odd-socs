import styled from "styled-components";
import Image from "next/image";
import {
  TitleText,
  SectionTitle,
} from "../../../components/universal/Text.styles";

import {
  // RowContainer,
  TitleContainer,
  ImageContainer,
} from "../../universal/Containers.styles";

import { getTop10Music } from "../../../api-routes/api-lastfm";

import { useEffect, useRef, useState } from "react";
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

function TopMusic() {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const [top10Music, setTop10Music] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTop10Music(setIsLoading, setTop10Music);
  }, []);

  return (
    <>
      <SectionTitle>Top 10 Music</SectionTitle>
      <MusicRowContainer {...events} ref={ref}>
        {isLoading
          ? null
          : top10Music.slice(0, 10).map((music, key) => {
              return (
                <TitleContainer key={key}>
                  <Link href="/title">
                    <a>
                      <ImageContainer>
                        <Image
                          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                          layout="fill"
                          alt={music.title}
                          priority
                        />
                      </ImageContainer>
                    </a>
                  </Link>
                  <TitleText>{music.title}</TitleText>
                </TitleContainer>
              );
            })}
      </MusicRowContainer>
    </>
  );
}

export default TopMusic;
