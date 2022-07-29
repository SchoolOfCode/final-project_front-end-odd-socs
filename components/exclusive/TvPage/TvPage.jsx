import styled from "styled-components";
import Image from "next/image";
import { PageContainer } from "../../universal/Containers.styles";
import TopTV from "../HomePage/TopTV";
import WatchlistTv from "./WatchlistTv";
import MyPicksTv from "./MyPicksTv";
import RandomTv from "./RandomTv";
import NinetiesShows from "./NinetiesShows";
import NewReleasesTv from "./NewReleasesTv";
import DocumentariesTv from "./DocumentariesTv";
import DramaTv from "./DramaTv";
import ComedyTv from "./ComedyTv";
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
      <RandomTv />
      <NinetiesShows />
      <NewReleasesTv />
      <DocumentariesTv />
      <DramaTv />
      <ComedyTv />
      <AnimeTv />
    </PageContainer>
  );
}

export default TvPage;
