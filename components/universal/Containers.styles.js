import styled from "styled-components";


// ------ NAVBAR & SEARCH SPECIFIC CONTAINERS ------
export const NavIconContainer = {
  fontSize: "2rem",
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
`