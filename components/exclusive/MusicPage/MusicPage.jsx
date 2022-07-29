

import styled from "styled-components";
import Image from "next/image";
import { PageContainer } from "../../universal/Containers.styles";
import ListenListMusic from "./ListenListMusic";
import TopHitsMusic from "./TopHitsMusic";
import MyPicksMusic from "./MyPicksMusic";
import NintiesMusic from "./NinetiesMusic";
import NewReleasesMusic from "./NewReleasesMusic";
import RandomMusic from "./RandomMusic";
import RnbMusic from "./RnbMusic";
import JazzMusic from "./JazzMusic";
import RockMusic from "./RockMusic";
import CountryMusic from "./CountryMusic";

const PageTitle = styled.div`
  color: var(--secondary);
  font-size: 3.5rem;
`;

function MusicPage() {
  return (
    <PageContainer>
      <PageTitle>Music</PageTitle>
      <TopHitsMusic />
      <ListenListMusic />
      <MyPicksMusic/>
      <NintiesMusic/>
      <NewReleasesMusic/>
      <RandomMusic/>
      <RnbMusic/>
      <JazzMusic/>
      <RockMusic/>
      <CountryMusic/>
    </PageContainer>
  );
}

export default MusicPage;
