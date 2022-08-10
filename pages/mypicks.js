import Header from "../components/exclusive/Header/Header";
import MyPicksPage from "../components/exclusive/MyPicksPage/MyPicksPage";

import {
  HeaderWrapper,
  PageWrapper,
} from "../components/universal/Containers.styles";

function MyPicks() {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <MyPicksPage />
      </PageWrapper>
    </>
  );
}

export default MyPicks;
