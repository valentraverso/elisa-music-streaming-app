import { createGlobalStyle } from 'styled-components';

export const colors = {
  "white": "#FCFDFF",
  "black": "#010A13",
  "grey": "#888D93",
  "dark-blue": "#0A1428",
  "blue": "#3B46F1"
}

export const fontSize = {
  "span": "15px",
  "p": "20px"
}

export const device = {
  "desktop": `(min-width: 1024px)`,
  "tablet": `(min-width: 480px)`,
  "mobile": `(max-width: 480px)`
}

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    font-family: 'Rubik', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${colors.white}
  }
  body::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: ${colors.grey};
  opacity: 0.6;
}

body::-webkit-scrollbar
{
	width: 12px;
	background-color: ${colors.grey};
  opacity: 0.6;
}

body::-webkit-scrollbar-thumb
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: ${colors['dark-blue']};
  border: 0.1px solid ${colors.black};
  opacity: 0.6;
}
  body{
    background-color: ${colors['dark-blue']};
  }
  a {
    color: ${colors.white};
    text-decoration: none;
  }
`

