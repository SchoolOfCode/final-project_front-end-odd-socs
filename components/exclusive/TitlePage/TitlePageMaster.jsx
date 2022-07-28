import styled from "styled-components";
import TitlePageDesktop from "./Desktop/TitlePageDesktop";
import TitlePageMobile from "./Mobile/TitlePageMobile";
import moviesList from "../../../data/movie-test-data/movies";
import { useState, useEffect } from "react";

const movieInfo = moviesList.slice(0, 1)[0];

function TitlePage() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <>
      {width >= 500 ? (
        <TitlePageDesktop movieInfo={movieInfo} />
      ) : (
        <TitlePageMobile movieInfo={movieInfo} />
      )}
    </>
  );
}

export default TitlePage;
