import styled from "styled-components";
import MenuHomeIcon from "./MenuHomeIcon";
import MenuMoviesIcon from "./MenuMoviesIcon";
import MenuTvIcon from "./MenuTVIcon";
import MenuMusicIcon from "./MenuMusicIcon";
import MenuGamesIcon from "./MenuGamesIcon";
import MenuMyPicksIcon from "./MenuMyPicksIcon";
import MenuWatchlistIcon from "./MenuWatchlistIcon";
import MenuAccountIcon from "./MenuAccountIcon";



const ModalStyles = styled.div`
  position: fixed;
  display: flex;
  width: 17rem;
  height: 90vh;
  top: 0;
  left: 0;
  backdrop-filter: blur(45px);
  margin-top: 10vh;
  padding: 2rem 0;
  overflow: hidden;
  
  @media screen and (max-width: 400px) {
    width: 100vw;
  };

`;

const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-around;
  margin: 0 auto;
  color: var(--highlight);
  font-family: var(--font-secondary);
  width: 90%;
`;

const NavRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: white;
  padding: 0 1rem;
`;

export const NavHR = styled.hr`
  border-bottom: 0.5px solid #8197a3;
`;

const NavLink = styled.a`
  font-size: 1.3rem;
  color: white;
  font-weight: 300;
  text-decoration: none;


  &:hover {
    color: var(--secondary);
  }

  @media screen and (max-width: 400px) {
    font-size: 2.5rem;
  }
`;

function NavMenuModal() {
  return (
    <ModalStyles>
      
      <ModalContentContainer>
        <NavRow>
          <MenuHomeIcon />
          <NavLink href="/home" aria-label="Go to the home page">Home</NavLink>
        </NavRow>
        <NavRow>
          <MenuMoviesIcon />
          <NavLink href="/movies" aria-label="Go to the movies page">Movies</NavLink>
        </NavRow>
        <NavRow>
          <MenuTvIcon />
          <NavLink href="/tv" aria-label="Go to the television page">TV</NavLink>
        </NavRow>
        <NavRow>
          <MenuMusicIcon />
          <NavLink href="/music" aria-label="Go to the music page">Music</NavLink>
        </NavRow>
        <NavRow>
          <MenuGamesIcon />
          <NavLink href="/games" aria-label="Go to the games page">Games</NavLink>
        </NavRow>
        <NavHR />
        <NavRow>
          <MenuMyPicksIcon />
          <NavLink href="/mypicks" aria-label="Go to the my picks page">My Picks</NavLink>
        </NavRow>
        <NavRow>
          <MenuWatchlistIcon />
          <NavLink href="/mywatchlist" aria-label="Go to the my watch list page">My Watchlist</NavLink>
        </NavRow>
        <NavHR />
        <NavRow>
          <MenuAccountIcon />
          <NavLink href="/profile" aria-label="Go to the my profile page">My Account</NavLink>
        </NavRow>
      </ModalContentContainer>
      
    </ModalStyles>
  );
}

export default NavMenuModal;
