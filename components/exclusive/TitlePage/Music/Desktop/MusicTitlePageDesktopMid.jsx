import styled from "styled-components";
import Image from "next/image";

import {
  TitlePageMidContainer,
  MidContainerTopSection,
  MidContainerMidSection,
  MidContainerBottomSection,
  ContentTitle,
  StatsContainer,
  Synopsis,
} from "../../Movies-TV/Desktop/TitlePageDesktopMid";

import { RowContainer } from "../../../../universal/Containers.styles";

const MusicTitlePageMidContainer = styled(TitlePageMidContainer)`
  max-width: 50%;
  height: 100%;
  justify-content: space-between;
  gap: 2.5rem;
`;

const TrackContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--highlight-1);
  font-weight: 300;
`;

const TracklistSubtitle = styled.h3`
  color: var(--highlight-1);
  font-weight: 400;
  font-size: 1rem;
`;

const MusicMidContainerTopSection = styled(MidContainerTopSection)`
  gap: 0.5rem;
`;

const MusicMidContainerMidSection = styled(MidContainerMidSection)`
  flex-direction: column;
`;

export const LastFMLink = styled.a`
  text-decoration: none;
  color: var(--highlight-1);
  font-size: 1.2rem;
`;

function MusicTitlePageDesktopMid({ musicData }) {
  return (
    <MusicTitlePageMidContainer>
      <MusicMidContainerTopSection>
        <ContentTitle>{musicData.album.name}</ContentTitle>
        <StatsContainer>{`${musicData.album.artist} | ${musicData.album.tags.tag[0].name} | Tracks: ${musicData.album.tracks.track.length}`}</StatsContainer>
      </MusicMidContainerTopSection>
      <MusicMidContainerMidSection>
        {/* <RowContainer> */}
        <TracklistSubtitle>Tracklist:</TracklistSubtitle>
        <TrackContainer>
          {musicData.album.tracks.track.map((track) => {
            return ` ${track.name} |`;
          })}
        </TrackContainer>
        {/* </RowContainer> */}
      </MusicMidContainerMidSection>
      <MidContainerBottomSection>
        <Synopsis>
          {`${musicData.album.wiki.content.slice(0, 400)}...`}
          <LastFMLink target="_blank" href={musicData.album.url}>
            read more on LastFM
          </LastFMLink>
        </Synopsis>
      </MidContainerBottomSection>
    </MusicTitlePageMidContainer>
  );
}

export default MusicTitlePageDesktopMid;