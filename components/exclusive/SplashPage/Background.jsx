import styled from "styled-components";
import WebmGraphic from "../../../assets/video/WebmGraphic.webm"

const BackgroundContainer = styled.div`
    height:100vh;
    width:100vw;
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
`

function Background(){
    
    return(
        <BackgroundContainer>
            <video autoPlay loop muted>
                <source src={WebmGraphic} type="video/webm"/>
            </video>
        </BackgroundContainer>
    )
}

export default Background