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

function TvPage() {
  return (
    <PageContainer>
      <PageTitle>TV Shows</PageTitle>
      <TopTV />
      <WatchlistTv />
      <MyPicksTv />
      <AiringTodayTv />
      <ActionTv />
      <DramaTv />
      <SciFiTv />
      <AnimeTv />
      <CrimeTv />
      <RandomTv />
    </PageContainer>
  );
}

export default TvPage;
