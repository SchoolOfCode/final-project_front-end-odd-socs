import Header from "../components/exclusive/Header/Header";
import MoviesPage from "../components/exclusive/MoviesPage/MoviePage";

import {
  HeaderWrapper,
  PageWrapper,
} from "../components/universal/Containers.styles";

function Movies() {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <MoviesPage />
      </PageWrapper>
    </>
  );
}

export default Movies;
