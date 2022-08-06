import styled from "styled-components";
import Image from "next/image";
import { PageContainer } from "../../universal/Containers.styles";
import ListenListMusic from "./ListenListMusic";
import TopMusic from "../HomePage/TopMusic";
import MyPicksMusic from "./MyPicksMusic";
import PopMusic from "./PopMusic";
import NewReleasesMusic from "./NewReleasesMusic";
import DanceMusic from "./DanceMusic";
import HiphopMusic from "./HiphopMusic";
import JazzMusic from "./JazzMusic";
import RockMusic from "./RockMusic";
import CountryMusic from "./CountryMusic";

const PageTitle = styled.div`
  color: var(--secondary);
  font-size: 3.5rem;
`;

function MusicPage({ musicList }) {
  return (
    <PageContainer>
      <PageTitle>Music</PageTitle>
      <TopMusic />
      <ListenListMusic />
      <MyPicksMusic />
      <NewReleasesMusic />
      <PopMusic popMusic={musicList.popular.album} />
      <RockMusic rockMusic={musicList.rock.album} />
      <CountryMusic countryMusic={musicList.country.album} />
      <JazzMusic jazzMusic={musicList.jazz.album} />
      <HiphopMusic hiphopMusic={musicList.hiphop.album} />
      <DanceMusic danceMusic={musicList.dance.album} />
    </PageContainer>
  );
}

export default MusicPage;
