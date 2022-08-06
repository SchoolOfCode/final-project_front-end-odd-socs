import Header from "../components/exclusive/Header/Header";
import MoviesPage from "../components/exclusive/MoviesPage/MoviePage";

import { movielist } from "../public/movie-data/movie-data";

import {
  HeaderWrapper,
  PageWrapper,
} from "../components/universal/Containers.styles";

export async function getStaticProps() {
  return {
    props: {
      movieList: movielist,
    },
  };
}

function Movies({ movieList }) {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <MoviesPage movieList={movieList} />
      </PageWrapper>
    </>
  );
}

export default Movies;
