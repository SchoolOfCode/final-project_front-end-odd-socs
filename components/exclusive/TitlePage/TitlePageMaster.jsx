import styled from "styled-components";
import TitlePageDesktop from "./Desktop/TitlePageDesktop";
import TitlePageMobile from "./Mobile/TitlePageMobile";
import moviesList from "../../../data/movie-test-data/movies";

const movieInfo = moviesList.slice(0, 1)[0];

function TitlePage() {
  return (
    <>
      <TitlePageDesktop movieInfo={movieInfo} />
    </>
  );
}

export default TitlePage;
