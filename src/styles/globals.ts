import { createGlobalStyle } from 'styled-components'

export const Globals = createGlobalStyle`
  :root {
    --backgroundColor: white;
    --headerColor: #f0f0f0;
    --textColor: #030303
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
