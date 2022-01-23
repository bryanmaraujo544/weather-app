import { createGlobalStyle } from "styled-components";

const global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.5;
    text-decoration: none;
    list-style: none;
    border: none;
  }

  html {
    font-size: 62.5%;

  }

  body {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    height: 100%;
  }
`;

export default global;