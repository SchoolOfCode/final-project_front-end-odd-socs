import Logo from "../../../../assets/site-logo/1Source.svg";
import Image from "next/image";
import styled from "styled-components";

const LogoContainer = styled.div`
  z-index: 1000;
  position: relative;
`;

function SiteLogo() {
  return (
    <LogoContainer>
      <Image src={Logo} width={200} height={100} alt="1Source Logo"></Image>
    </LogoContainer>
  );
}

export default SiteLogo;
