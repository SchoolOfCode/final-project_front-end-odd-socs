import styled from "styled-components";
import MenuHomeIcon from "./MenuHomeIcon";
import MenuMoviesIcon from "./MenuMoviesIcon";
import MenuTvIcon from "./MenuTVIcon";
import MenuMusicIcon from "./MenuMusicIcon";
import MenuGamesIcon from "./MenuGamesIcon";
import MenuMyPicksIcon from "./MenuMyPicksIcon";
import MenuAccountIcon from "./MenuAccountIcon";

const ModalStyles = styled.div`
  position: fixed;
  display: flex;
  width: 20rem;
  height: 90vh;
  top: 0;
  left: 0;
  backdrop-filter: blur(30px);
  margin-top: 10vh;
  padding: 2rem 0;
  overflow: hidden;

  @media screen and (max-width: 400px) {
    width: 100vw;
  }
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
          <NavLink href="/home">Home</NavLink>
        </NavRow>
        <NavRow>
          <MenuMoviesIcon />
          <NavLink href="/movies">Movies</NavLink>
        </NavRow>
        <NavRow>
          <MenuTvIcon />
          <NavLink href="/tv">TV</NavLink>
        </NavRow>
        <NavRow>
          <MenuMusicIcon />
          <NavLink href="/music">Music</NavLink>
        </NavRow>
        <NavRow>
          <MenuGamesIcon />
          <NavLink href="/games">Games</NavLink>
        </NavRow>
        <NavHR />
        <NavRow>
          <MenuMyPicksIcon />
          <NavLink href="/mypicks">My Picks</NavLink>
        </NavRow>
        <NavHR />
        <NavRow>
          <MenuAccountIcon />
          <NavLink href="/profile">My Account</NavLink>
        </NavRow>
      </ModalContentContainer>
    </ModalStyles>
  );
}

export default NavMenuModal;
