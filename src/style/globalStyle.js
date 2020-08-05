import { createGlobalStyle } from "styled-components";

import Gilroy from "../assets/fonts/Gilroy-Bold.woff";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Gilroy';
  src: url('${Gilroy}') format('woff');
}

  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  *:focus, 
  *:active {
    outline: 0;
  }

  :root {
    --color-primary: #e01e69;
    --color-secondary: #20b1c4;
    --color-primary-hover: #20b1c4;
    --color-white: #a2a2a2;
    --color-backgroud: #080808;
    --color-background-section-active: rgb(6 6 6 / 84%);
         
    --font-size-default: 1.6rem;
    --font-size-title: 2.6rem;
    --font-family-default: 'Heebo';
    --font-family-gilroy: 'Gilroy';
  }

  ::-webkit-scrollbar-track {
    border-radius: 0.4rem;
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 0.3rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: var(--font-family-default);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: var(--font-size-default);
    font-weigth: 400;
    overflow-y: scroll;
    background: var(--color-backgroud);
  }

  button {
    font: inherit;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    line-height: normal;
    appearance: none;
    color: inherit;
    border: none;
    background: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  span, a, h3{
    transition: color .7s cubic-bezier(.5,0,0,1);
  }
`;

export default GlobalStyle;
