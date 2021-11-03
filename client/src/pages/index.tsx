import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

interface Post {
  title: string;
  body: string;
}

const Home: NextPage = () => {
  const { isAuthenticated, loginWithRedirect, logout, getAccessTokenSilently } =
    useAuth0();
  const [token, setToken] = useState<string>("");
  const [posts, setPosts] = useState<Post[]>();

  console.log(posts);

  const fetchPosts = () => {
    axios.get("http://localhost:3001/api/v1/posts").then((res) => {
      setPosts(res.data);
    });
  };

  const createPosts = () => {
    const headers = {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
    const data = {
      title: "タイトル3",
      body: "説明3",
    };
    axios.post("http://localhost:3001/api/v1/posts", data, headers);
  };

  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently({});
        setToken(accessToken);
      } catch (e: any) {
        console.log(e.message);
      }
    };
    getToken();
  }, []);

  console.log(posts);
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
        <button onClick={createPosts}>投稿作成</button>
        <h2>投稿一覧</h2>
        <button onClick={fetchPosts}>投稿取得</button>
        {posts?.map((post: Post, index: number) => (
          <div key={index}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
