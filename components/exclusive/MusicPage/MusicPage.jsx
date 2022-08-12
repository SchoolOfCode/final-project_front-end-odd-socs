import styled from "styled-components";
import Image from "next/image";
import { PageContainer } from "../../universal/Containers.styles";
import TopMusic from "./TopMusic";
import MyPicksMusic from "./MyPicksMusic";
import PopMusic from "./PopMusic";
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
      <TopMusic topMusic={musicList.top10.album} />
      <MyPicksMusic />
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
