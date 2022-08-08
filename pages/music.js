import Header from "../components/exclusive/Header/Header";
import MusicPage from "../components/exclusive/MusicPage/MusicPage";

import {
  HeaderWrapper,
  PageWrapper,
} from "../components/universal/Containers.styles";

import { musiclist } from "../public/music-data/music-data";

export async function getStaticProps() {
  return {
    props: {
      musicList: musiclist,
    },
  };
}

function Music({ musicList }) {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <MusicPage musicList={musicList} />
      </PageWrapper>
    </>
  );
}

export default Music;
