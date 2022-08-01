import Header from "../components/exclusive/Header/Header";
import MusicPage from "../components/exclusive/MusicPage/MusicPage";

import {
  HeaderWrapper,
  PageWrapper,
} from "../components/universal/Containers.styles";

function Music() {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <MusicPage />
      </PageWrapper>
    </>
  );
}

export default Music;
