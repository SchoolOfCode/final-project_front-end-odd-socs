import styled from "styled-components";
import MusicTitlePageDesktop from "./Desktop/MusicTitlePageDesktop";
import MusicTitlePageMobile from "./Mobile/MusicTitlePageMobile";
import { useState, useEffect } from "react";

function MusicTitlePage({ musicData }) {
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
        <MusicTitlePageDesktop musicData={musicData} />
      ) : (
        <MusicTitlePageMobile musicData={musicData} />
      )}
    </>
  );
}

export default MusicTitlePage;
