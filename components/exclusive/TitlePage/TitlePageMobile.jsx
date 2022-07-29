import TitleImageMobile from "./Mobile/TitlePageMobileImage";
import TitlePageContents from "./Mobile/TitlePageMobileContents";
import styled from "styled-components";

const MobilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

function TitlePageMobile({ movieInfo }) {
  return (
    <MobilePageContainer>
      <TitleImageMobile movieInfo={movieInfo} />
      <TitlePageContents movieInfo={movieInfo} />
    </MobilePageContainer>
  );
}

export default TitlePageMobile;
