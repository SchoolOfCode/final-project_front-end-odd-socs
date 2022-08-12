import styled from "styled-components";
import Image from "next/image";
import YouTube from "react-youtube";
import GooglePlayIcon from "../../../../../public/assets/WatchIcons/google.png";
import YouTubeIcon from "../../../../../public/assets/WatchIcons/YT-White.png";
import AmazonIcon from "../../../../../public/assets/WatchIcons/APV-White.png";
import Link from "next/link";

export const TitlePageMidContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  width: 100%;
  margin: 0 3rem;
  gap: 1.5rem;
`;

export const MidContainerTopSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MidContainerMidSection = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  width: 100%;
  height: 6rem;
  gap: 0rem;
`;

export const MidContainerBottomSection = styled.div``;

export const ContentTitle = styled.h1`
  color: white;
  font-size: 1.8rem;
  font-weight: 400;
`;

export const StatsContainer = styled.div`
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

// const VideoContainer = styled.div`
//   width: 500px;
//   height: auto;
// `;

const VideoStyle = {
  height: "200px",
  width: "300px",
  playerVars: {
    autoplay: 0,
  },
};

export const Synopsis = styled.p`
  color: white;
  font-size: 1.2rem;
  text-align: justify;
  font-weight: 300;
`;

export const TitlePageStatsContainer = styled.div`
  display: flex;
  color: var(--highlight-1);
  font-size: 1rem;
`;

function TitlePageDesktopMid({ movieData, trailerData, tvData }) {
  return (
    <TitlePageMidContainer>
      <MidContainerTopSection>
        {movieData && <ContentTitle>{movieData.title}</ContentTitle>}
        {tvData && <ContentTitle>{tvData.original_name}</ContentTitle>}
        {movieData && (
          <StatsContainer>{`${movieData.release_date
            .toString()
            .slice(0, 4)} | ${movieData.genres[0].name} | ${
            movieData.runtime
          } mins | TMDb Score: ${movieData.vote_average}`}</StatsContainer>
        )}
        {tvData && (
          <TitlePageStatsContainer>{`${tvData.first_air_date
            .toString()
            .slice(0, 4)} | ${tvData.genres[0].name} | ${
            tvData.episode_run_time
          } mins | TMDb Score: ${
            tvData.vote_average
          }`}</TitlePageStatsContainer>
        )}
      </MidContainerTopSection>
      <MidContainerMidSection>
        <WatchOnContainer>
          <WatchOnText>Watch on:</WatchOnText>
          <WatchOnIconsContainer>
            <WatchOnIconStyle>
              <Link href="https://play.google.com/store/movies/details/Jurassic_World_Dominion?id=r7yQmvn5_XM.P&hl=en&gl=US">
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
              <Link href="https://www.amazon.com/Jurassic-World-Dominion-Chris-Pratt/dp/B0B5M9RNVF/ref=sr_1_1?keywords=jurassic+world+dominion&qid=1660303085&s=instant-video&sprefix=jur%2Cinstant-video%2C168&sr=1-1">
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
        {trailerData && (
          <YouTube videoId={trailerData.results[0].key} opts={VideoStyle} />
        )}
      </MidContainerMidSection>
      <MidContainerBottomSection>
        {movieData && <Synopsis>{movieData.overview}</Synopsis>}
        {tvData && <Synopsis>{tvData.overview}</Synopsis>}
      </MidContainerBottomSection>
    </TitlePageMidContainer>
  );
}

export default TitlePageDesktopMid;
