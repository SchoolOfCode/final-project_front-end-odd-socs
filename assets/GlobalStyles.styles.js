import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    html {
      font-size: calc(60% + 0.8vmin);
    }

    body {
        margin: 0;
        padding: 0;
    }

    * {
        font-size: 1rem;
    }

`;
