import Header from "../components/exclusive/Header/Header";
import MyWatchlistPage from "../components/exclusive/MyWatchlistPage/MyWatchlistPage";

import {
  HeaderWrapper,
  PageWrapper,
} from "../components/universal/Containers.styles";

function MyWatchlist() {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <MyWatchlistPage />
      </PageWrapper>
    </>
  );
}

export default MyWatchlist;
