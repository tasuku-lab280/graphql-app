import type { NextPage } from "next";
import { useAuth0 } from "@auth0/auth0-react";
import { gql, useMutation } from "@apollo/client";

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($title: String!, $body: String!) {
    createPost(input: { title: $title, body: $body }) {
      post {
        id
      }
      result
    }
  }
`;

const Home: NextPage = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [createPost] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: (data) => {
      console.log(data);
    },
  });

  return (
    <div className="App">
      <div style={{ padding: "20px" }}>
        <h2>ログインボタン</h2>
        <button onClick={() => loginWithRedirect()}>ログイン</button>

        <h2>ログアウトボタン</h2>
        <button onClick={() => logout()}>ログアウト</button>

        <h2>ログイン状態</h2>
        {isAuthenticated ? <p>ログイン</p> : <p>ログアウト</p>}

        <h2>投稿作成</h2>
        <button
          onClick={() =>
            createPost({
              variables: {
                title: "タイトル4",
                body: "説明4",
              },
            })
          }
        >
          投稿作成(GraphQL)
        </button>
      </div>
    </div>
  );
};

export default Home;
