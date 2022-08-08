import MusicTitleImageMobile from "./MusicTitleImageMobile";
import MusicTitlePageMobileContents from "./MusicTitlePageMobileContents";
import styled from "styled-components";

const MobilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

function MusicTitlePageMobile({ musicData }) {
  return (
    <MobilePageContainer>
      <MusicTitleImageMobile musicData={musicData} />
      <MusicTitlePageMobileContents musicData={musicData} />
    </MobilePageContainer>
  );
}

export default MusicTitlePageMobile;
