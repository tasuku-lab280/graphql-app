import PrivateRoute from "../../components/commons/PrivateRoute";
import ArticleTemplate from "../../components/pages/ArticleTemplate";

const ArticleItem = () => {
  // DOM
  return <ArticleTemplate />;
};

export default PrivateRoute(ArticleItem);
