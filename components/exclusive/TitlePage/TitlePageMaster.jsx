import styled from "styled-components";
import TitlePageDesktop from "./TitlePageDesktop";
import TitlePageMobile from "./TitlePageMobile";

import moviesList from "../../../data/movie-test-data/movies";

// const movieInfo = moviesList.slice(0, 1)[0];
// const movieInfo = moviesList.slice(1, 2)[0];
const movieInfo = moviesList.slice(2, 3)[0];
// const movieInfo = moviesList.slice(3, 4)[0];

function TitlePage() {
  return (
    <>
      <TitlePageDesktop movieInfo={movieInfo} />
    </>
  );
}

export default TitlePage;
