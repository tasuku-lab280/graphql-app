import PrivateRoute from "../components/commons/PrivateRoute";
import StartTemplate from "../components/pages/StartTemplate";

const Start = () => {
  // DOM
  return <StartTemplate />;
};

export default PrivateRoute(Start);
