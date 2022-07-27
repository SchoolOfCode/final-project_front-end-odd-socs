import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --primary: #0E161E;
    --secondary: #3dcfc2;
    --highlight-1: #8197A3;
    --font-primary-color: #ffffff;
    --font-secondary-color: #ccd2e3;
    --font-primary: "Futura PT", sans-serif;
}

@font-face {
  font-family: "Futura PT";
  src: local("FuturaPT-Light.woff2") format("woff2"),
    local("FuturaPT-Light.woff") format("woff"),
    local("FuturaPT-Light.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

    html {
      font-size: calc(60% + 0.8vmin);
      background-color: var(--primary);
    }

    body {
        margin: 0;
        padding: 0;
    }

    * {
        font-size: 1rem;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--font-primary)
    }
`;
