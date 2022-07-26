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
  z-index: 10;
  width: 20rem;
  height: 90vh;
  top: 0;
  left: 0;
  backdrop-filter: blur(30px);
  margin-top: 10vh;
  padding: 2rem 0;

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
  width: 90%;

`;

const NavRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: white;
  padding: 0 1rem;
`;

const NavHR = styled.hr`
  border-bottom: 0.5px solid #8197a3;
`;

const NavLink = styled.a`
  font-size: 1.3rem;
  color: white;
  font-weight: 300;
  text-decoration: none;
  z-index: 1;

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
          <NavLink href="#">Home</NavLink>
        </NavRow>
        <NavRow>
          <MenuMoviesIcon />
          <NavLink href="#">Movies</NavLink>
        </NavRow>
        <NavRow>
          <MenuTvIcon />
          <NavLink href="#">TV</NavLink>
        </NavRow>
        <NavRow>
          <MenuMusicIcon />
          <NavLink href="#">Music</NavLink>
        </NavRow>
        <NavRow>
          <MenuGamesIcon />
          <NavLink href="#">Games</NavLink>
        </NavRow>
        <NavHR />
        <NavRow>
          <MenuMyPicksIcon />
          <NavLink href="#">My Picks</NavLink>
        </NavRow>
        <NavRow>
          <MenuWatchlistIcon />
          <NavLink href="#">My Watchlist</NavLink>
        </NavRow>
        <NavHR />
        <NavRow>
          <MenuAccountIcon />
          <NavLink href="#">My Account</NavLink>
        </NavRow>
      </ModalContentContainer>
    </ModalStyles>
  );
}

export default NavMenuModal;
