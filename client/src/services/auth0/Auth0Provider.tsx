import { Auth0Provider as Provider } from "@auth0/auth0-react";

const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;
const redirectUri = process.env.NEXT_PUBLIC_BASE_URL;

const Auth0Provider = (props: { children: React.ReactNode }) => {
  return (
    <Provider
      domain={domain as string}
      clientId={clientId as string}
      redirectUri={redirectUri}
    >
      {props.children}
    </Provider>
  );
};

export default Auth0Provider;
