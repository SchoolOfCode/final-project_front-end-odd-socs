import styled from "styled-components";
import { PageContainer } from "../../universal/Containers.styles";
import TopMovies from "../HomePage/TopMovies";
import WatchlistMovies from "./WatchlistMovies";
import MyPicksMovies from "./MyPicksMovies";
import ActionMovies from "./ActionMovies";
import NewReleasesMovies from "./NewReleasesMovies";
import RandomMovies from "./RandomMovies";
import HorrorMovies from "./HorrorMovies";
import SciFiMovies from "./SciFiMovies";
import ComedyMovies from "./ComedyMovies";
import Documentary from "./Documentary";

const PageTitle = styled.div`
  color: var(--secondary);
  font-size: 3.5rem;
`;

function MoviesPage() {
  return (
    <PageContainer>
      <PageTitle>Movies</PageTitle>
      <TopMovies />
      <NewReleasesMovies />
      <WatchlistMovies />
      <MyPicksMovies />
      <ActionMovies />
      <SciFiMovies />
      <ComedyMovies />
      <HorrorMovies />
      <Documentary />
      <RandomMovies />
    </PageContainer>
  );
}

export default MoviesPage;
