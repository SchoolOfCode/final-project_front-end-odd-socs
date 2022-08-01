import styled from "styled-components";
import WebmGraphic from "../../../assets/video/1Source_Splash_bkg.webm";

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: block;
`;

const BackgroundStyle = {
  minWidth: "100%",
  minHeight: "100%",
  width: "auto",
  height: "auto",
  display: "block",
};

function Background() {
  return (
    <BackgroundContainer>
      <video style={BackgroundStyle} autoPlay loop muted>
        <source src={WebmGraphic} type="video/webm" />
      </video>
    </BackgroundContainer>
  );
}

export default Background;
