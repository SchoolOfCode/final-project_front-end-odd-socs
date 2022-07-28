import styled from "styled-components";
import { useState, useEffect } from "react";

const TitlePageContentContainer = styled.div`
  background-color: var(--primary);
  margin-top: 55vh;
  /* height: 100%; */
  height: 500px;
  z-index: -1;
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

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
`;

const Synopsis = styled.a`
  color: red;
  font-size: 1.2rem;
  text-decoration: none;
`;

function TitlePageContents({ movieInfo }) {
  const [synopsis, setSynopsis] = useState("");

  useEffect(() => {
    const shortSynopsis = `${movieInfo.plot.slice(0, 150)}...`;
    setSynopsis(shortSynopsis);
  }, []);

  function showFullSynopsis() {
    // setSynopsis(movieInfo.plot);
    console.log("clicked");
  }

  return (
    <TitlePageContentContainer>
      <TitlePageTitleContainer>
        <Title>{movieInfo.title}</Title>
        <TitlePageStatsContainer>
          <TitlePageStatsContainer>{`${movieInfo.year} | Age | Runtime | IMDb: ${movieInfo.imDbRating}`}</TitlePageStatsContainer>
        </TitlePageStatsContainer>
        {/* <Synopsis href="#" onClick={showFullSynopsis}>
          See details
        </Synopsis> */}
        <a onClick={() => console.log("wow")}>Click here</a>
      </TitlePageTitleContainer>
    </TitlePageContentContainer>
  );
}

export default TitlePageContents;
