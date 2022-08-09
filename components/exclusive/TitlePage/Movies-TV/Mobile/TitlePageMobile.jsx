import TitleImageMobile from "./TitlePageMobileImage";
import TitlePageContents from "./TitlePageMobileContents";
import styled from "styled-components";

const MobilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

function TitlePageMobile({ movieData, tvData }) {
  return (
    <MobilePageContainer>
      <TitleImageMobile movieData={movieData} tvData={tvData} />
      <TitlePageContents movieData={movieData} tvData={tvData} />
    </MobilePageContainer>
  );
}

export default TitlePageMobile;
