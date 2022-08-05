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

  const albumImage = `#text`;

  return (
    <>
      <SectionTitle>Top 10 Music</SectionTitle>
      <MusicRowContainer {...events} ref={ref}>
        {isLoading
          ? null
          : Object.keys(top10Music).map(function (key) {
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
            })}
      </MusicRowContainer>
    </>
  );
}

export default TopMusic;
