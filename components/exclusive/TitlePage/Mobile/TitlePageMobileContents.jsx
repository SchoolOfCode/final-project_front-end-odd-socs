import styled from "styled-components";

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
  z-index: -1;
  /* border: 2px solid green; */
  top: -5vh;
  height: 75px;
  padding: 0 2rem;
`;

const Title = styled.h1`
    color: white;
    font-size: 3rem;
`

function TitlePageContents({ movieInfo }) {
  return (
    <TitlePageContentContainer>
      <TitlePageTitleContainer>
        <Title>Title</Title>
      </TitlePageTitleContainer>
    </TitlePageContentContainer>
  );
}

export default TitlePageContents;
