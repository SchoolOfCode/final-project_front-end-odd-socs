

import Header from "../../../../components/exclusive/Header/Header";
import TitlePage from "../../../../components/exclusive/TitlePage/TitlePageMaster";
import styled from "styled-components";
import {
  HeaderWrapper,
  PageWrapper,
} from "../../../../components/universal/Containers.styles";

import { useRouter } from "next/router";

import { movielist } from "../../../../public/movie-data/movie-data";

function Title({ movieData }) {
  const router = useRouter();
  const titleId = router.query.movieId;

  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <PageWrapper>
        <TitlePage movieData={movieData} />
      </PageWrapper>
    </>
  );
}

export async function getStaticPaths() {
  const topMovieIDs = movielist.top10.map((movie) => movie.id.toString());
  const newReleaseIDs = movielist.newReleases.map((movie) =>
    movie.id.toString()
  );
  const actionIDs = movielist.action.map((movie) => movie.id).toString();
  const scifiIDs = movielist.scifi.map((movie) => movie.id.toString());
  const comedyIDs = movielist.comedy.map((movie) => movie.id.toString());
  const horrorIDs = movielist.horror.map((movie) => movie.id.toString());
  const documentaryIDs = movielist.documentary
    .map((movie) => movie.id)
    .toString();
  const randomIDs = movielist.random.map((movie) => movie.id.toString());

  let IDs = [
    ...topMovieIDs,
    ...newReleaseIDs,
    ...actionIDs,
    ...scifiIDs,
    ...comedyIDs,
    ...horrorIDs,
    ...documentaryIDs,
    ...randomIDs,
  ];
  // console.log(IDs);

  return {
    fallback: false,
    paths: IDs.map((ID) => ({ params: { movieId: ID } })),
  };
}

export async function getStaticProps(context) {
  const movieId = context.params.movieId;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=5b12a167b6f95af9455340da9de5a3ad`
  );
  const selectedMovie = await res.json();

  return {
    props: {
      movieData: selectedMovie,
    },
  };
}

export default Title;
