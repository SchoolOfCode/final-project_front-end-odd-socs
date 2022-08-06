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

function MoviesPage({ movieList }) {
  return (
    <PageContainer>
      <PageTitle>Movies</PageTitle>
      <TopMovies topMovies={movieList.top10} />
      <NewReleasesMovies newReleases={movieList.newReleases} />
      {/* <WatchlistMovies /> */}
      {/* <MyPicksMovies /> */}
      <ActionMovies actionMovies={movieList.action} />
      <SciFiMovies scifiMovies={movieList.scifi} />
      <ComedyMovies comedyMovies={movieList.comedy} />
      <HorrorMovies horrorMovies={movieList.horror} />
      <Documentary documentaryMovies={movieList.documentary} />
      <RandomMovies randomMovies={movieList.random} />
    </PageContainer>
  );
}

export default MoviesPage;
