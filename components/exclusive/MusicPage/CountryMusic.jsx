import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { TitleText, SectionTitle } from "../../universal/Text.styles";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

import {
  RowContainer,
  TitleContainer,
  ImageContainer,
} from "../../universal/Containers.styles";

const MusicImageContainer = styled(ImageContainer)`
  width: 12rem;
  height: 12rem;
`;

function CountryMusic({ countryMusic }) {
  const ref = useRef();
  const { events } = useDraggable(ref);
  return (
    <>
      <SectionTitle>Country</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {countryMusic.slice(0, 20).map((album, key) => {
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
                      src={album.image[2]["#text"]}
                      layout="fill"
                      alt={album.name}
                      priority={true}
                    ></Image>
                  </MusicImageContainer>
                </a>
              </Link>
              <TitleText>{album.name}</TitleText>
            </TitleContainer>
          );
        })}
      </RowContainer>
    </>
  );
}

export default CountryMusic;
