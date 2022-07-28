import styled from "styled-components";
import { useState, useEffect } from 'react'

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
  z-index: -1;
  /* border: 2px solid green; */
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
`

const Synopsis =styled.p`
color: white;
font-size: 1.2rem;

`



function TitlePageContents({ movieInfo }) {

    const [synopsis, setSynopsis] = useState("")

    // function cutSynopsis (movieInfo) {
        useEffect(() => {
          const shortSynopsis = `${movieInfo.plot.slice(0, 150)}`
        setSynopsis(shortSynopsis)   
        },[])
       
// cutSynopsis(movieInfo)
  return (
    <TitlePageContentContainer>
      <TitlePageTitleContainer>
        <Title>{movieInfo.title}</Title>
        <TitlePageStatsContainer>
        <TitlePageStatsContainer>{`${movieInfo.year} | Age | Runtime | IMDb: ${movieInfo.imDbRating}`}</TitlePageStatsContainer>
        </TitlePageStatsContainer>
        <Synopsis>
        {synopsis}
      </Synopsis>
    </TitlePageTitleContainer>
    </TitlePageContentContainer>
  );
}

export default TitlePageContents;
