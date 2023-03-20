import ReactDOM from 'react-dom/client';
import Router from './Routes/Router';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './UI/Styles/config';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="elisa-music.eu.auth0.com"
    clientId="fsVFdfmlECj5SasV748GC1Hqx1OXulLD"
    authorizationParams={{
      redirect_uri: "http://localhost:3000/"
    }}
  >
    <GlobalStyle />
    <Router />
  </Auth0Provider>
);

reportWebVitals();
