import styled from "styled-components";
import HamburgerIcon from "./HamburgerIcon";
import NavSearchIcon from "../Search/NavSearchIcon";
import NavCloseIcon from "./CloseIcon";
import NavMenuModal from "./NavModal";

import { useState } from "react";

const NavStyles = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100vw;
  height: 10vh;
  padding: 0 1rem;
`;

const Title = styled.h1`
  color: var(--font-primary-color);
  font-size: 3.5rem;
`;

const TitleSpan = styled.span`
  font-size: 3.5rem;
  color: var(--secondary);
`;

function NavMenu() {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  function menuModalOpenHandler() {
    setIsMenuModalOpen(true);
  }

  function menuModalCloseHandler() {
    setIsMenuModalOpen(false);
  }

  function searchModalOpenHandler() {
    setIsSearchModalOpen(true);
  }

  function searchModalCloseHandler() {
    setIsSearchModalOpen(false);
  }

  return (
    <NavStyles>
      {isMenuModalOpen ? (
        <NavCloseIcon menuModalCloseHandler={menuModalCloseHandler} />
      ) : (
        <HamburgerIcon menuModalOpenHandler={menuModalOpenHandler} />
      )}
      {isMenuModalOpen && <NavMenuModal />}
      <Title>
        <TitleSpan>1</TitleSpan>
        Source
      </Title>
      <NavSearchIcon />
    </NavStyles>
  );
}

export default NavMenu;
