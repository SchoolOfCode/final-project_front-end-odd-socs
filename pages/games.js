import GamesPage from "../components/exclusive/GamesPage/GamesPage";
import Header from "../components/exclusive/Header/Header";

import {
  HeaderWrapper,
  PageWrapper,
} from "../components/universal/Containers.styles";

function Games() {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <GamesPage />
      </PageWrapper>
    </>
  );
}

export default Games;
