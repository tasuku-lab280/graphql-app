import { Auth0Provider as Provider } from '@auth0/auth0-react';

const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN || '';
const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || '';
const audience = process.env.NEXT_PUBLIC_API_BASE_URL || '';
const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/start`;

const Auth0Provider: React.FC = ({ children }) => {
  return (
    <Provider domain={domain} clientId={clientId} audience={audience} redirectUri={redirectUri}>
      {children}
    </Provider>
  );
};

export default Auth0Provider;
