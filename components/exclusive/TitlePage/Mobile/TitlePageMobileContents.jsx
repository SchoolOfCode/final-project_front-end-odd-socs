import styled from "styled-components";
import { useState, useEffect } from "react";
import Link from "next/link";
import SeeMore from "./SeeMore";
import SeeLess from "./SeeLess";

const TitlePageContentContainer = styled.div`
  background-color: var(--primary);
  margin-top: 55vh;
  height: 100%;
  height: 500px;
  z-index: 0;
  -webkit-box-shadow: 0px -16px 22px 25px #0e161e;
  box-shadow: 0px -16px 22px 25px #0e161e;
`;

const TitlePageTitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  top: -7.5vh;
  height: 100%;
  padding: 0 2rem;
  gap: 1rem;
`;

const TitlePageStatsContainer = styled.div`
  display: flex;
  color: var(--highlight-1);
  font-size: 1.2rem;
`;

const TitlePageSynopsisContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
`;

const Synopsis = styled.a`
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
`;

function TitlePageContents({ movieInfo }) {
  const [synopsis, setSynopsis] = useState("");
  const [isSynopsisOpen, setIsSynopsisOpen] = useState(false);
  const shortSynopsis = `${movieInfo.plot.slice(0, 150)}...`;

  useEffect(() => {
    setSynopsis(shortSynopsis);
  }, []);

  function toggleFullSynopsis(e) {
    e.preventDefault;
    setIsSynopsisOpen((prevSynopsisIsOpen) => !prevSynopsisIsOpen);
  }

  useEffect(() => {
    if (isSynopsisOpen === true) {
      setSynopsis(movieInfo.plot);
    }
  }, [isSynopsisOpen]);

  useEffect(() => {
    if (isSynopsisOpen === false) {
      setSynopsis(shortSynopsis);
    }
  }, [isSynopsisOpen]);

  console.log(isSynopsisOpen);

  return (
    <TitlePageContentContainer>
      <TitlePageTitleContainer>
        <Title>{movieInfo.title}</Title>
        <TitlePageStatsContainer>
          <TitlePageStatsContainer>{`${movieInfo.year} | Age | Runtime | IMDb: ${movieInfo.imDbRating}`}</TitlePageStatsContainer>
        </TitlePageStatsContainer>
        <TitlePageSynopsisContainer>
          <Synopsis href="#" onClick={toggleFullSynopsis}>
            {synopsis}
          </Synopsis>
          {isSynopsisOpen ? <SeeLess /> : <SeeMore />}
        </TitlePageSynopsisContainer>
      </TitlePageTitleContainer>
    </TitlePageContentContainer>
  );
}

export default TitlePageContents;
