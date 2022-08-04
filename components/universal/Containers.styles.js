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
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  cursor: grab;
  /* min-height: 25rem; */
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5;
  width: 100%;

  /* padding: 1rem 1rem 0 1rem;
  margin: 25px 0;

  &:hover {
    -webkit-box-shadow: -15px 25px 0px -10px var(--secondary),
      20px -20px 0px -20px var(--primary), 20px -20px -0px -10px var(--primary),
      -20px 20px 0px -10px var(--primary), 0px 0px 0px 5px var(--secondary),
      25px 25px 15px 5px rgba(0, 0, 0, 0);

    box-shadow: -15px 25px 0px -10px var(--primary),
      20px -20px 0px -20px var(--primary), 20px -20px -0px -10px var(--primary),
      -20px 20px 0px -10px var(--primary), 0px 0px 0px 5px var(--secondary),
      25px 25px 15px 5px rgba(0, 0, 0, 0); */
  /* padding: 1rem 1.5rem; */
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
