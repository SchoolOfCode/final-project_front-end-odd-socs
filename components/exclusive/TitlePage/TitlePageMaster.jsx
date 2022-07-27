import styled from "styled-components";
import TitlePageDesktop from "./TitlePageDesktop";
import TitlePageMobile from "./TitlePageMobile";

import moviesList from "../../../data/movie-test-data/movies";

const shawshankRedemption = moviesList.slice(0, 1);

function TitlePage() {
  return (
    <>
      <TitlePageDesktop movieInfo={shawshankRedemption} />
    </>
  );
}

export default TitlePage;
