import Header from "../components/exclusive/Header/Header";
import TvPage from "../components/exclusive/TvPage/TvPage";

import { tvlist } from "../public/tv-data/tv-data";

import {
  HeaderWrapper,
  PageWrapper,
} from "../components/universal/Containers.styles";

export async function getStaticProps() {
  return {
    props: {
      tvList: tvlist,
    },
  };
}

function TV({ tvList }) {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <TvPage tvList={tvList} />
      </PageWrapper>
    </>
  );
}

export default TV;
