import styled from "styled-components";
import TitlePageDesktopLeft from "./TitlePageDesktopLeft";

// Whole page container
const TitlePageContainer = styled.div`
  width: 100vw;
  margin-top: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90vh;
`;

// MID CONTAINERS
// Holds all information on center of page (not comments section)
const TitlePageMidContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// RIGHT CONTAINERS
// Holds comment section
const TitlePageRightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function TitlePageDesktop({ movieInfo }) {
  return (
    <TitlePageContainer>
      <TitlePageDesktopLeft movieInfo={movieInfo} />
      <TitlePageMidContainer></TitlePageMidContainer>
      <TitlePageRightContainer></TitlePageRightContainer>
    </TitlePageContainer>
  );
}

export default TitlePageDesktop;
