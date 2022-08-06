import styled from "styled-components";
import Image from "next/image";
import { TitleText, SectionTitle } from "../../universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function ActionTv({ actionTV }) {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <>
      <SectionTitle>Action & Adventure</SectionTitle>
      <RowContainer {...events} ref={ref}>
        {actionTV.map((tv, key) => {
          return (
            <TitleContainer key={key}>
              <ImageContainer>
                <Image
                  src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
                  layout="fill"
                  alt={tv.title}
                  priority
                ></Image>
              </ImageContainer>
              <TitleText>{tv.name}</TitleText>
            </TitleContainer>
          );
        })}
      </RowContainer>
    </>
  );
}

export default ActionTv;
