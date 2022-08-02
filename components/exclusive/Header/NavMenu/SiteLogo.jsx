import Logo from "../../../../assets/site-logo/1Source.svg";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const LogoContainer = styled.div`
  z-index: 1000;
  position: relative;
`;

function SiteLogo() {
  return (
    <LogoContainer>
      <Link href="/home">
        <a>
          <Image src={Logo} width={200} height={100} alt="1Source Logo"></Image>
        </a>
      </Link>
    </LogoContainer>
  );
}

export default SiteLogo;
