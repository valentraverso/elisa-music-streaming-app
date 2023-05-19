import ReactDOM from 'react-dom/client';
import Router from './routes/Router';
import { GlobalStyle } from './UI/Styles/config';
import { Auth0Provider } from '@auth0/auth0-react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider as ProviderRedux } from "react-redux"
import { store } from './utils/redux/store';
import { ConfigProvider, theme } from 'antd';
import { colors } from './UI/Styles/config';
import handelRightClick from './utils/handleRigthClick';

document.addEventListener('contextmenu', handelRightClick);

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: process.env.REACT_APP_API_URL
    }}
  >
    <QueryClientProvider client={queryClient}>
      <ProviderRedux store={store}>
        <ConfigProvider
          theme={{
            token: {
              colorBgElevated: colors['dark-blue'],
              colorText: colors.white,
              fontSize: "20px",
              lineHeight: "26px"
            },
            algorithm: theme.darkAlgorithm
          }}>
          <GlobalStyle />
          <Router />
        </ConfigProvider>
      </ProviderRedux>
    </QueryClientProvider>
  </Auth0Provider>
);