import Header from "../components/exclusive/Header/Header";
import HomePage from "../components/exclusive/HomePage/HomePage";

import {
  HeaderWrapper,
  PageWrapper,
} from "../components/universal/Containers.styles";

import { movielist } from "../public/movie-data/movie-data";
import { tvlist } from "../public/tv-data/tv-data";
import { musiclist } from "../public/music-data/music-data";
import { gamelist } from "../public/games-data/games-data";

export async function getStaticProps() {
  return {
    props: {
      movieList: movielist.top10.slice(0, 10),
      tvList: tvlist.top10,
      musicList: musiclist.top10.album,
      gameList: gamelist.top10,
    },
  };
}

function Home({ movieList, tvList, musicList, gameList }) {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <HomePage
          movieList={movieList}
          tvList={tvList}
          musicList={musicList}
          gameList={gameList}
        />
      </PageWrapper>
    </>
  );
}

export default Home;
