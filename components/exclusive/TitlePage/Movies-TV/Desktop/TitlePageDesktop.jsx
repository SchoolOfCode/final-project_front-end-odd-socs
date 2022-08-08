import styled from "styled-components";
import TitlePageDesktopLeft from "./TitlePageDesktopLeft";
import TitlePageDesktopMid from "./TitlePageDesktopMid";
import TitlePageDesktopRight from "./TitlePageDesktopRight";

// Whole page container
export const TitlePageContainer = styled.div`
  width: 100vw;
  margin-top: 10vh;
  display: flex;
  align-items: center;
  height: 90vh;
  padding: 0 3rem;
`;

export const PageContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 80rem;
  margin: 0 auto;
  min-height: 30rem;
  max-height: 60rem;
`;

function TitlePageDesktop({ movieData, tvData }) {
  return (
    <TitlePageContainer>
      <PageContentContainer>
        <TitlePageDesktopLeft movieData={movieData} tvData={tvData} />
        <TitlePageDesktopMid movieData={movieData} tvData={tvData} />
        <TitlePageDesktopRight movieData={movieData} tvData={tvData} />
      </PageContentContainer>
    </TitlePageContainer>
  );
}

export default TitlePageDesktop;
