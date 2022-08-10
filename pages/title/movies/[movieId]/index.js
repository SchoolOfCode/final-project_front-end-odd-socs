import Header from "../../../../components/exclusive/Header/Header";
import TitlePage from "../../../../components/exclusive/TitlePage/Movies-TV/TitlePageMaster";

import {
  HeaderWrapper,
  PageWrapper,
} from "../../../../components/universal/Containers.styles";

import { useRouter } from "next/router";

function Title({ movieData, trailerData }) {
  const router = useRouter();
  const titleId = router.query.movieId;

  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <TitlePage trailerData={trailerData} movieData={movieData} />
      </PageWrapper>
    </>
  );
}

export async function getServerSideProps(context) {
  const movieId = context.params.movieId;

  const resInfo = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=5b12a167b6f95af9455340da9de5a3ad`
  );
  const selectedMovie = await resInfo.json();

  const resTrailer = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=5b12a167b6f95af9455340da9de5a3ad&language=en-US`
  );

  const movieTrailer = await resTrailer.json();

  return {
    props: {
      movieData: selectedMovie,
      trailerData: movieTrailer,
    },
  };
}

export default Title;
