
import ReactDOM from 'react-dom/client';
import Router from './Routes/Router';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit';
    background-color: #0A1428;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <GlobalStyle />
  <Router />
   
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
