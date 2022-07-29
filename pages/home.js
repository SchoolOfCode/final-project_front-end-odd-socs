import Header from "../components/exclusive/Header/Header";
import HomePage from "../components/exclusive/HomePage/HomePage";

import {
  HeaderWrapper,
  PageWrapper,
} from "../components/universal/Containers.styles";

function Home() {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <HomePage />
      </PageWrapper>
    </>
  );
}

export default Home;
