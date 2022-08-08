import styled from "styled-components";
import GamesTitlePageDesktop from "./Desktop/GamesTitlePageDesktop";
import GamesTitlePageMobile from "./Mobile/GamesTitlePageMobile";
import { useState, useEffect } from "react";

function GamesTitlePage({ gameData, screenshotData }) {
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
        <GamesTitlePageDesktop
          screenshotData={screenshotData}
          gameData={gameData}
        />
      ) : (
        <GamesTitlePageMobile
          screenshotData={screenshotData}
          gameData={gameData}
        />
      )}
    </>
  );
}

export default GamesTitlePage;
