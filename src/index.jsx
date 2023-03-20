import ReactDOM from 'react-dom/client';
import Router from './Routes/Router';
import { GlobalStyle } from './UI/Styles/config';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <GlobalStyle />
    <Router />
  </Auth0Provider>
);