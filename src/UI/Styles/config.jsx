import { createGlobalStyle } from 'styled-components';

export const colors = {
    "white": "#FCFDFF",
    "black": "#010A13",
    "grey": "#888D93",
    "dark-blue": "#0A1428",
    "blue": "#3B46F1"
}

export const device = {
  "desktop": `(min-width: 768px)`,
}

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    font-family: 'Rubik', sans-serif;
    background-color: #0A1428;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${colors.white}
  }
  a {
    color: ${colors.white};
  }
`

