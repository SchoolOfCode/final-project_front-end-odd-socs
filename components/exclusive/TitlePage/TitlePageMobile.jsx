import TitleImageMobile from "./Mobile/TitlePageMobileImage";
import TitlePageContents from "./Mobile/TitlePageMobileContents";
import styled from "styled-components";

const MobilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

function TitlePageMobile() {
  return (
    <MobilePageContainer>
      <TitleImageMobile />
      <TitlePageContents  />
    </MobilePageContainer>
  );
}

export default TitlePageMobile;
