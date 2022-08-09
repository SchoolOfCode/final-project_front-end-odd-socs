import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function CrimeTv({ crimeTV }) {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <>
      <SectionTitle>Crime</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {crimeTV.map((tv, key) => {
          return (
            <TitleContainer key={key}>
              <Link href={`/title/tv/${tv.id}`}>
                <a>
                  <ImageContainer>
                    <Image
                      src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
                      layout="fill"
                      alt="tv"
                      priority
                    ></Image>
                  </ImageContainer>
                </a>
              </Link>
              <TitleText>{tv.name}</TitleText>
            </TitleContainer>
          );
        })}
      </RowContainer>
    </>
  );
}

export default CrimeTv;
