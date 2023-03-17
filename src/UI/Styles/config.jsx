import { createGlobalStyle } from 'styled-components';


export const colors = {
    "white" : "#FCFDFF",
}

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    font-family: 'Rubik', sans-serif;
    background-color: #0A1428;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a {
    color: ${colors.white};
  }
`

