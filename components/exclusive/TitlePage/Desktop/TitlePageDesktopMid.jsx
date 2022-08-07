import styled from "styled-components";
import Image from "next/image";
import YouTube from "react-youtube";
import GooglePlayIcon from "../../../../public/assets/WatchIcons/google.png";
import YouTubeIcon from "../../../../public/assets/WatchIcons/YT-White.png";
import AmazonIcon from "../../../../public/assets/WatchIcons/APV-White.png";
import Link from "next/link";

const TitlePageMidContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  width: 100%;
  margin: 0 3rem;
  gap: 1.5rem;
`;

const MidContainerTopSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const MidContainerMidSection = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  width: 100%;
  gap: 1rem;
`;

const MidContainerBottomSection = styled.div``;

const ContentTitle = styled.h1`
  color: white;
  font-size: 1.8rem;
  font-weight: 400;
`;

const StatsContainer = styled.div`
  display: flex;
  color: var(--highlight-1);
`;

const WatchOnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  gap: 0.5rem;
`;

const WatchOnText = styled.h2`
  color: var(--highlight-1);
  font-size: 1.2rem;
  font-weight: 300;
`;

const WatchOnIconsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const WatchOnIconStyle = styled.div`
  display: flex;
  width: 5rem;
  height: 2.2rem;
  position: relative;
`;

const VideoContainer = styled.div`
  width: 50%;
  height: 100%;
`;

const VideoStyle = {
  height: "auto",
  width: "90%",
  playerVars: {
    autoplay: 0,
  },
};

const Synopsis = styled.p`
  color: white;
  font-size: 1.2rem;
  text-align: justify;
  font-weight: 300;
`;

function TitlePageDesktopMid({ movieData }) {
  return (
    <TitlePageMidContainer>
      <MidContainerTopSection>
        <ContentTitle>{movieData.title}</ContentTitle>
        <StatsContainer>{`${movieData.release_date.toString().slice(0, 4)} | ${
          movieData.genres[0].name
        } | ${movieData.runtime} mins | TMDb Score: ${
          movieData.vote_average
        }`}</StatsContainer>
      </MidContainerTopSection>
      <MidContainerMidSection>
        <WatchOnContainer>
          <WatchOnText>Watch on:</WatchOnText>
          <WatchOnIconsContainer>
            <WatchOnIconStyle>
              <Link href="https://play.google.com/store/movies/details/The_Shawshank_Redemption?id=McibEy8umXo.P">
                <a target="_blank">
                  <Image
                    src={GooglePlayIcon}
                    layout="fill"
                    objectFit="contain"
                    alt="Google Play Icon"
                  />
                </a>
              </Link>
            </WatchOnIconStyle>
            <WatchOnIconStyle>
              <Link href="https://www.youtube.com/watch?v=LeilTRBt-h4">
                <a target="_blank">
                  <Image
                    src={YouTubeIcon}
                    layout="fill"
                    objectFit="contain"
                    alt="YouTube Icon"
                  />
                </a>
              </Link>
            </WatchOnIconStyle>
            <WatchOnIconStyle>
              <Link href="https://www.amazon.co.uk/Shawshank-Redemption-Morgan-Freeman/dp/B00I6ER1OK">
                <a target="blank">
                  <Image
                    src={AmazonIcon}
                    layout="fill"
                    objectFit="contain"
                    alt="Amazon Icon"
                  />
                </a>
              </Link>
            </WatchOnIconStyle>
          </WatchOnIconsContainer>
        </WatchOnContainer>
        <VideoContainer>
          <YouTube videoId="6hB3S9bIaco" opts={VideoStyle} />
        </VideoContainer>
      </MidContainerMidSection>
      <MidContainerBottomSection>
        <Synopsis>{movieData.overview}</Synopsis>
      </MidContainerBottomSection>
    </TitlePageMidContainer>
  );
}

export default TitlePageDesktopMid;
