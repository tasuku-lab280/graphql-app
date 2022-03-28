// Import
import type { AppProps } from 'next/app';

// Custom Import
import Auth0Provider from 'services/auth0/Auth0Provider';
import ApolloProvider from 'services/graphql/ApolloProvider';
import ReduxProvider from 'services/redux/ReduxProvider';
import 'styles/globals.scss';

// Component
const App = ({ Component, pageProps }: AppProps) => {
  // DOM
  return (
    <ReduxProvider>
      <Auth0Provider>
        <ApolloProvider>
          <Component {...pageProps} />
        </ApolloProvider>
      </Auth0Provider>
    </ReduxProvider>
  );
};

// Default Export
export default App;
