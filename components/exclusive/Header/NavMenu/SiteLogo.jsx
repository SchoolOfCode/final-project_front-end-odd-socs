import Logo from "../../../../public/assets/site-logo/1Source.svg";
import Logo2 from "../../../../public/assets/site-logo/1Source-edit2.svg";
import AltLogo from "../../../../public/assets/site-logo/1SourceLogo-edit.svg";

//Logos for different pages 
// import LogoMovie from "../../../../public/assets/1Source-Movie.svg";
// import LogoTV from ".../../../../public/assets/1Source-TV.svg";
// import LogoMusic from "../../../../public/assets/1Source-Music.svg";
// import LogoGaming from "../../../../public/assets/1Source-Gaming.svg";
//
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
          <Image
            src={Logo2}
            width={150}
            height={100}
            alt="1Source Logo"
          ></Image>
        </a>
      </Link>
    </LogoContainer>
  );
}

export default SiteLogo;
