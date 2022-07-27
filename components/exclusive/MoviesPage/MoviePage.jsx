/*
    PLAN
    create movie page component
    - display 10 category components
        - watchlist
        - my picks
        - top movies
        - 90s films
        - new releases
        - random
        - horror
        - sci-fi
        - comedy
        - rom-coms 
        

    - add compopnents to movie page component
    - add movie page component to pages/movies.jsx
    - import and add the header component pages/movies.jsx - DONE
*/

import styled from "styled-components";
import Image from "next/image";
import { PageContainer } from "../../universal/Containers.styles";
import TopMovies from "../HomePage/TopMovies";
import Watchlist from "./Watchlist";
// import TopTV from "../HomePage/TopTV";
// import TopMusic from "../HomePage/TopMusic";
// import TopGames from "../HomePage/TopGames";

const PageTitle = styled.div`
  color: var(--secondary);
  font-size: 3.5rem;
`


function MoviesPage() {
    return (
      
        <PageContainer>
        <PageTitle>Movies</PageTitle>
            <TopMovies />
            <Watchlist />
           
           
        </PageContainer>
    
    );
  }
  
  export default MoviesPage;