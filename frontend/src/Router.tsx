import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home, MyPost } from "./pages";
import Common from "./components/Layouts/CommonLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Common>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mypage/posts" component={MyPost} />
        </Switch>
      </Common>
    </BrowserRouter>
  );
};

export default Router;
