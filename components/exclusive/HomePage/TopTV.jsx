import styled from "styled-components";
import Image from "next/image";
import {
  TitleText,
  SectionTitle,
} from "../../../components/universal/Text.styles";

import {
  ImageContainer,
  RowContainer,
  TitleContainer,
} from "../../universal/Containers.styles";

import { tv } from "../../../data/home-test-data/home-test-data";

function TopTV() {
  return (
    <>
      <SectionTitle>Top 10 TV Shows</SectionTitle>
      <RowContainer>
        {tv.map((tv, key) => {
          return (
            <TitleContainer key={key}>
              <ImageContainer>
                <Image src={tv.image.src} layout="fill" alt="tv"></Image>
              </ImageContainer>
              <TitleText>{tv.title}</TitleText>
            </TitleContainer>
          );
        })}
      </RowContainer>
    </>
  );
}

export default TopTV;
