import Image from 'next/image'
import styled from 'styled-components'

 const TitleImageMobileContainer = styled.div`
 position: absolute;
 top: 10vh;
 left:0;
 width: 100vw;
 height: 70vh;
 z-index: -1;
 `

function TitleImageMobile({movieInfo}) {
    const imageUrl = `${movieInfo.image.split("_")[0]}@.jpg`;

    return (
<TitleImageMobileContainer>
    <Image src={imageUrl} layout="fill"></Image>
</TitleImageMobileContainer>
    )
}



export default TitleImageMobile