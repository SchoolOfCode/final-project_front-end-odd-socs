import styled from "styled-components";

import {
  TitlePageContainer,
  PageContentContainer,
} from "../../Movies-TV/Desktop/TitlePageDesktop";

import MusicTitlePageDesktopLeft from "./MusicTitlePageDesktopLeft";
import MusicTitlePageDesktopMid from "./MusicTitlePageDesktopMid";
import MusicTitlePageDesktopRight from "./MusicTitlePageDesktopRight";

function MusicTitlePageDesktop({ musicData }) {
  return (
    <TitlePageContainer>
      <PageContentContainer>
        <MusicTitlePageDesktopLeft musicData={musicData} />
        <MusicTitlePageDesktopMid musicData={musicData} />
        <MusicTitlePageDesktopRight musicData={musicData} />
      </PageContentContainer>
    </TitlePageContainer>
  );
}

export default MusicTitlePageDesktop;
