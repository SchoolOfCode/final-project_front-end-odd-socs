/*
    PLAN
    create tv page component
    - display 10 category components
        - Top TV - DONE
        - watchlist - DONE
        - my picks - DONE
        - 90s show - DONE
        - new releases - DONE
        - random - DONE
        - documentaries - DONE
        - drama - DONE
        - comedy - DONE
        - anime - DONE
        

    - add components to tv page component
    - add tv page component to pages/movies.jsx
    - import and add the header component pages/tv.jsx - DONE
*/

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

// import TopTV from "../HomePage/TopTV";
// import TopMusic from "../HomePage/TopMusic";
// import TopGames from "../HomePage/TopGames";

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
      <NewReleasesTv/>
      <DocumentariesTv/>
      <DramaTv/>
      <ComedyTv/>
      <AnimeTv/>
  
    </PageContainer>
    
  );
}

export default TvPage;
