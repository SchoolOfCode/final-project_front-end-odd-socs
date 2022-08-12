import Logo2 from "../../../../public/assets/site-logo/1Source-edit2.svg";
import MovieLogo from "../../../../public/assets/site-logo/1Source-Movie.svg";
import TVLogo from "../../../../public/assets/site-logo/1Source-TV.svg";
import MusicLogo from "../../../../public/assets/site-logo/1Source-Music.svg";
import GamesLogo from "../../../../public/assets/site-logo/1Source-Gaming.svg";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LogoContainer = styled.div`
  z-index: 1000;
  position: relative;
  display: flex;
`;

function SiteLogo() {
  const [pageType, setPageType] = useState("");
  const router = useRouter();

  useEffect(() => {
    let currentPath = router.pathname;
    if (currentPath === "/") {
      setPageType("splash");
    } else if (currentPath.includes("/movies")) {
      setPageType("movies");
    } else if (currentPath.includes("/tv")) {
      setPageType("tv");
    } else if (currentPath.includes("/music")) {
      setPageType("music");
    } else if (currentPath.includes("/games")) {
      setPageType("games");
    }
  }, [pageType]);

  return (
    <LogoContainer>
      <Link href="/home">
        <a>
          {pageType === "splash" && (
            <Image
              src={Logo2}
              width={200}
              height={100}
              alt="1Source Logo"
            ></Image>
          )}
          {pageType === "movies" && (
            <Image
              src={MovieLogo}
              width={200}
              height={100}
              alt="1Source Logo"
            ></Image>
          )}
          {pageType === "tv" && (
            <Image
              src={TVLogo}
              width={200}
              height={100}
              alt="1Source Logo"
            ></Image>
          )}
          {pageType === "music" && (
            <Image
              src={MusicLogo}
              width={200}
              height={100}
              alt="1Source Logo"
            ></Image>
          )}
          {pageType === "games" && (
            <Image
              src={GamesLogo}
              width={200}
              height={100}
              alt="1Source Logo"
            ></Image>
          )}
          <Image
          aria-label="one source website logo"
            src={Logo2}
            width={150}
            height={100}
            alt="1Source Logo"
          ></Image>
        </a>
      </Link>
      {/* <PageLogo>
        {pageType === "movies" && <Image src={MovieLogo} layout="fill" />}
      </PageLogo> */}
    </LogoContainer>
  );
}

export default SiteLogo;
