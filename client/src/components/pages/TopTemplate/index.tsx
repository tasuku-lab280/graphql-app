import { useAuth0 } from "@auth0/auth0-react";

import BaseLayout from "../../layouts/BaseLayout";

const TopTemplate = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <BaseLayout>
      <div>
        <h2>ログイン状態</h2>
        {isAuthenticated ? <p>ログイン</p> : <p>ログアウト</p>}
      </div>
    </BaseLayout>
  );
};

export default TopTemplate;
