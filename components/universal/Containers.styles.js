import styled from "styled-components";

// ------ MAIN WRAPPERS FOR MASTER COMPONENTS ------

export const HeaderWrapper = styled.div`
  position: relative;
  z-index: 1000;
`;

export const PageWrapper = styled.div`
  position: relative;
  z-index: 0;
`;

// ------ NAVBAR & SEARCH SPECIFIC CONTAINERS ------
export const NavIconContainer = {
  fontSize: "2.5rem",
  color: "var(--font-secondary-color)",
};

export const MenuIconContainer = {
  fontSize: "1.8rem",
};

export const SearchIconContainer = {
  fontSize: "3rem",
  color: "var(--font-secondary-color)",
};

export const SearchIconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
`;

// ------ PAGE SETUP CONTAINERS ------

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  width: 100vw;
  gap: 1rem;
  padding: 4rem 3rem;
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  max-width: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  cursor: grab;
  min-height: max-content;
  overflow-x: scroll;
  justify-content: flex-start;
  align-items: flex-start;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5;
  width: 100%;
  justify-content: flex-start;

  &:hover {
    transform: scale(1.05);
    transition: 0.2s ease-in;
  }
`;

export const ImageContainer = styled.div`
  width: 10rem;
  height: 15rem;
  position: relative;
  &:hover {
    cursor: grab;
  }

  > * {
    border-radius: 3px;
  }
`;
