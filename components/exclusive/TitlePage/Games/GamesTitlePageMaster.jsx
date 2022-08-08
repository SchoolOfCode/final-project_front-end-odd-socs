import styled from "styled-components";
import GamesTitlePageDesktop from "./Desktop/GamesTitlePageDesktop";
// import GamesTitlePageMobile from "./Mobile/GamesTitlePageMobile";
import { useState, useEffect } from "react";

function GamesTitlePage({ gameData }) {
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

  return <GamesTitlePageDesktop gameData={gameData} />;

  // return (
  //   <>
  //     {width >= 500 ? (
  //       <GamesTitlePageDesktop gameData={gameData} />
  //     ) : (
  //       <GamesTitlePageMobile gameData={gameData} />
  //     )}
  //   </>
  // );
}

export default GamesTitlePage;
