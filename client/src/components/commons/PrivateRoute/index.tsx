import { withAuthenticationRequired } from '@auth0/auth0-react';

import Loading from 'components/commons/atoms/Loading';

const PrivateRoute = (Component: React.FC) =>
  withAuthenticationRequired(Component, {
    onRedirecting: () => <Loading />,
  });

export default PrivateRoute;
