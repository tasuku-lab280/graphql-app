// Import
import { Provider } from 'react-redux';

// Custom Import
import { store } from './store';

// Component
const ReduxProvider: React.FC = ({ children }) => {
  // DOM
  return <Provider store={store}>{children}</Provider>;
};

// Default Export
export default ReduxProvider;
