/*
    PLAN
    create tv page component
    - display 10 category components
        - Top TV -
        - watchlist - 
        - my picks - 
        - 90s show - 
        - new releases - 
        - random - 
        - documentaries - 
        - drama - 
        - comedy - 
        - anime - 
        

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
      
  
    </PageContainer>
    
  );
}

export default TvPage;
