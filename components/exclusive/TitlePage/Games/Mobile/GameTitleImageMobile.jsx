import Image from "next/image";
import styled from "styled-components";

const TitleImageMobileContainer = styled.div`
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100vw;
  height: 70vh;
`;

function GamesTitleImageMobile({ gameData }) {
  return (
    <TitleImageMobileContainer>
      <Image
        src={gameData.background_image}
        layout="fill"
        alt="Title Image--Mobile"
      ></Image>
    </TitleImageMobileContainer>
  );
}

export default GamesTitleImageMobile;
