import { createGlobalStyle } from 'styled-components'

export const Globals = createGlobalStyle`
  :root {
    --primaryColor: #A8A8A8;
    --primaryColorTransparent: #A8A8A815;
    --backgroundColor: white;
    --textColor: #030303;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--textColor);
    background-color: var(--backgroundColor);
  }

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }
`
