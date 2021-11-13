import type { AppProps } from "next/app";
import "../styles/globals.css";

import Auth0Provider from "../services/auth0/Auth0Provider";
import ApolloProvider from "../services/graphql/ApolloProvider";
import ThemeProvider from "../services/theme/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider>
      <ApolloProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </Auth0Provider>
  );
}
export default MyApp;
