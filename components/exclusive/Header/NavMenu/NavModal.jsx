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
  z-index: 0;
  width: 20vw;
  height: 90vh;
  top: 0;
  left: 0;
  backdrop-filter: blur(30px);
  /* border: 1px solid white; */
  margin-top: 10vh;

  @media screen and (max-width: 400px) {
    width: 100vw;
  }
`;

const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  color: var(--highlight);
  font-family: var(--font-secondary);
  width: 95%;
`;

const NavRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  padding: 0 0.5rem;
`;

const NavHR = styled.hr`
  border-bottom: 0.5px solid #8197a3;
`;

const NavLink = styled.a`
  font-size: 1.3rem;
  color: white;
  font-weight: 300;
`;

function NavMenuModal() {
  return (
    <ModalStyles>
      <ModalContentContainer>
        <NavRow>
          <MenuHomeIcon />
          <NavLink>Home</NavLink>
        </NavRow>
        <NavRow>
          <MenuMoviesIcon />
          <NavLink>Movies</NavLink>
        </NavRow>
        <NavRow>
          <MenuTvIcon />
          <NavLink>TV</NavLink>
        </NavRow>
        <NavRow>
          <MenuMusicIcon />
          <NavLink>Music</NavLink>
        </NavRow>
        <NavRow>
          <MenuGamesIcon />
          <NavLink>Games</NavLink>
        </NavRow>
        <NavHR />
        <NavRow>
          <MenuMyPicksIcon />
          <NavLink>My Picks</NavLink>
        </NavRow>
        <NavRow>
          <MenuWatchlistIcon />
          <NavLink>My Watchlist</NavLink>
        </NavRow>
        <NavHR />
        <NavRow>
        <MenuAccountIcon />
          <NavLink>My Account</NavLink>
        </NavRow>
      </ModalContentContainer>
    </ModalStyles>
  );
}

export default NavMenuModal;
