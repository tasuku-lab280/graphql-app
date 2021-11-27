import { withAuthenticationRequired } from "@auth0/auth0-react";

const PrivateRoute = (Component: React.FC) =>
  withAuthenticationRequired(Component, {
    onRedirecting: () => <p>...loading</p>,
  });

export default PrivateRoute;
