/*
    PLAN
    create my picks page component
    - display 4 category components
        - Top hits - DONE
        - Listen list - DONE
        - my picks - DONE
        - 90s hits - DONE
        - new releases - DONE
        - random - DONE
        - RnB - DONE
        - Jazz - DONE
        - Rock - DONE
        - Country - DONE
*/

import styled from "styled-components";
import Image from "next/image";
import { PageContainer } from "../../universal/Containers.styles";
import MyPicksMovies from "../MoviesPage/MyPicksMovies";
import MyPicksTv from "../TvPage/MyPicksTv";
import MyPicksMusic from "../MusicPage/MyPicksMusic";
import MyPicksGames from "../GamesPage/MyPicksGames";

const PageTitle = styled.div`
  color: var(--secondary);
  font-size: 3.5rem;
`;

function MyPicksPage() {
  return (
    <PageContainer>
      <PageTitle>My Picks</PageTitle>
      <MyPicksMovies/>
      <MyPicksTv/>
      <MyPicksMusic/>
      <MyPicksGames/>
      
    </PageContainer>
  );
}

export default MyPicksPage;
