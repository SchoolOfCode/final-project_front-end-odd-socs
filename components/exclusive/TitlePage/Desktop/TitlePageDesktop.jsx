import styled from "styled-components";
import TitlePageDesktopLeft from "./TitlePageDesktopLeft";
import TitlePageDesktopMid from "./TitlePageDesktopMid";
import TitlePageDesktopRight from "./TitlePageDesktopRight";

// Whole page container
const TitlePageContainer = styled.div`
  width: 100vw;
  margin-top: 10vh;
  display: flex;
  align-items: center;
  height: 90vh;
  padding: 0 3rem;
`;

const PageContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 80rem;
  margin: 0 auto;
  min-height: 30rem;
  max-height: 60rem;
`;

export function TitlePageDesktop({ movieInfo }) {
  return (
    <TitlePageContainer>
      <PageContentContainer>
        <TitlePageDesktopLeft movieInfo={movieInfo} />
        <TitlePageDesktopMid movieInfo={movieInfo} />
        <TitlePageDesktopRight movieInfo={movieInfo} />
      </PageContentContainer>
    </TitlePageContainer>
  );
}

export default TitlePageDesktop;
