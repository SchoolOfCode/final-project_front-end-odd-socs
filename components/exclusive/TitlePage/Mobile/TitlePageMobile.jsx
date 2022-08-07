import TitleImageMobile from "./TitlePageMobileImage";
import TitlePageContents from "./TitlePageMobileContents";
import styled from "styled-components";

const MobilePageContainer = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
`

function TitlePageMobile({movieData}) {

    return (
        <MobilePageContainer>
            <TitleImageMobile movieData={movieData}/>
            <TitlePageContents movieData={movieData}/>
        </MobilePageContainer>
    )
}

export default TitlePageMobile;
