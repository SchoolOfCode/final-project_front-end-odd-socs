import styled from "styled-components";
import Image from "next/image";
import { PageContainer } from "../../universal/Containers.styles";
import TopTV from "../HomePage/TopTV";
import WatchlistTv from "./WatchlistTv";
import MyPicksTv from "./MyPicksTv";
import RandomTv from "./RandomTv";
import AiringTodayTv from "./AiringTodayTv";
import CrimeTv from "./CrimeTv";
import ActionTv from "./ActionTv";
import DramaTv from "./DramaTv";
import SciFiTv from "./SciFiTv";
import AnimeTv from "./AnimeTv";

const PageTitle = styled.div`
  color: var(--secondary);
  font-size: 3.5rem;
`;

function TvPage({ tvList }) {
  return (
    <PageContainer>
      <PageTitle>TV Shows</PageTitle>
      <TopTV topTV={tvList.top10} />
      {/* <WatchlistTv /> */}
      {/* <MyPicksTv /> */}
      <AiringTodayTv airingToday={tvList.airingToday} />
      <ActionTv actionTV={tvList.action} />
      <DramaTv dramaTV={tvList.drama} />
      <SciFiTv scifiTV={tvList.scifi} />
      <AnimeTv animeTV={tvList.anime} />
      <CrimeTv crimeTV={tvList.crime} />
      <RandomTv randomTV={tvList.random} />
    </PageContainer>
  );
}

export default TvPage;
