import Header from "../components/exclusive/Header/Header";
import TvPage from "../components/exclusive/TvPage/TvPage";

import {
  HeaderWrapper,
  PageWrapper,
} from "../components/universal/Containers.styles";

function TV() {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <TvPage />
      </PageWrapper>
    </>
  );
}

export default TV;
