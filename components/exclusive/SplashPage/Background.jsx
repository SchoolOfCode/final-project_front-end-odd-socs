import { filledInputClasses } from "@mui/material";
import styled from "styled-components";
import WebmGraphic from "../../../public/assets/video/1Source-SplashPage-Graphic.webm";

// const BackgroundContainer = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   z-index: -1;
//   height: 100vh;
//   width: 100%;
//   overflow: hidden;
//   display: block;
//   background-size: cover;
// `;

const BackgroundContainer = styled.a``;

const BackgroundStyle = {
  minWidth: "100%",
  minHeight: "100%",
  width: "auto",
  height: "auto",
  position: "fixed",
  zIndex: "-1",
  top: "0",
  left: "0",
  display: "block",
  overflow: "hidden",
  objectFit: "fill",
};

function Background({ closeLoginModalHandler }) {
  return (
    <BackgroundContainer>
      <video
        onClick={closeLoginModalHandler}
        style={BackgroundStyle}
        autoPlay
        loop
        muted
      >
        <source src={WebmGraphic} type="video/webm" />
      </video>
    </BackgroundContainer>
  );
}

export default Background;
