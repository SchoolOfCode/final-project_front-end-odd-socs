/*
    PLAN
    create movie page component
    - display 10 category components
        - watchlist - DONE
        - my picks - DONE
        - top movies - DONE
        - 90s films - DONE
        - new releases - DONE
        - random - DONE
        - horror - DONE
        - sci-fi - DONE
        - comedy - DONE
        - rom-coms - DONE
        

    - add compopnents to movie page component
    - add movie page component to pages/movies.jsx
    - import and add the header component pages/movies.jsx - DONE
*/

import styled from "styled-components";
import Image from "next/image";
import { PageContainer } from "../../universal/Containers.styles";
import TopMovies from "../HomePage/TopMovies";
import Watchlist from "./Watchlist";
import MyPicks from "./MyPicks";
import NinetiesMovies from "./NinetiesMovies";
import NewReleases from "./NewReleases";
import Random from "./Random";
import Horror from "./Horror";
import SciFi from "./SciFi";
import Comedy from "./Comedy";
import RomComs from "./RomComs";
// import TopTV from "../HomePage/TopTV";
// import TopMusic from "../HomePage/TopMusic";
// import TopGames from "../HomePage/TopGames";

const PageTitle = styled.div`
  color: var(--secondary);
  font-size: 3.5rem;
`;

function MoviesPage() {
  return (
    <PageContainer>
      <PageTitle>Movies</PageTitle>
      <TopMovies />
      <Watchlist />
      <MyPicks/>
      <NinetiesMovies/>
      <NewReleases/>
      <Random/>
      <Horror />
      <SciFi />
      <Comedy />
      <RomComs />
    </PageContainer>
    
  );
}

export default MoviesPage;
