import styled from "styled-components";
import Image from "next/image";
import { PageContainer } from "../../universal/Containers.styles";
import TopMovies from "../HomePage/TopMovies";
import WatchlistMovies from "./WatchlistMovies";
import MyPicksMovies from "./MyPicksMovies";
import NinetiesMovies from "./NinetiesMovies";
import NewReleasesMovies from "./NewReleasesMovies";
import RandomMovies from "./RandomMovies";
import HorrorMovies from "./HorrorMovies";
import SciFiMovies from "./SciFiMovies";
import ComedyMovies from "./ComedyMovies";
import RomComMovies from "./RomComMovies";

const PageTitle = styled.div`
  color: var(--secondary);
  font-size: 3.5rem;
`;

function MoviesPage() {
  return (
    <PageContainer>
      <PageTitle>Movies</PageTitle>
      <TopMovies />
      <WatchlistMovies />
      <MyPicksMovies/>
      <NinetiesMovies/>
      <NewReleasesMovies/>
      <RandomMovies/>
      <HorrorMovies />
      <SciFiMovies />
      <ComedyMovies />
      <RomComMovies />
    </PageContainer>
    
  );
}

export default MoviesPage;
