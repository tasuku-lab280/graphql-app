import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { gql, useQuery, useMutation } from "@apollo/client";

import Button from "components/commons/atoms/Button";
import Loading from "components/commons/atoms/Loading";
import TextField from "components/commons/atoms/TextField";
import BaseLayout from "../../layouts/BaseLayout";
import styles from "./styles.module.scss";

const CURRENT_USER_QUERY = gql`
  query CurrentUserQuery {
    currentUser {
      id
      email
      nickname
    }
  }
`;

const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($nickname: String!, $email: String!) {
    updateUser(input: { nickname: $nickname, email: $email }) {
      errors {
        attribute
        messages
      }
    }
  }
`;

const StartTemplate = () => {
  // Hooks
  const router = useRouter();
  const [nickname, setNickname] = useState("");

  const { user: auth0User, isLoading: auth0Loading } = useAuth0();
  const email = auth0User?.email;

  const { data: currentUserData, loading: currentUserLoading } =
    useQuery(CURRENT_USER_QUERY);
  const currentUserNickname = currentUserData?.currentUser?.nickname;
  const currentUserEmail = currentUserData?.currentUser?.email;

  const [updateUser, { data: updateUserData, loading: updateUserLoading }] =
    useMutation(UPDATE_USER_MUTATION, {
      onCompleted: (data) => {
        if (data.updateUser.errors.length > 0) return;
        router.push("/");
      },
      onError: (error) => {
        alert(`システムエラーが発生しました。\n${error}`);
      },
    });

  useEffect(() => {
    if (currentUserNickname && currentUserEmail) {
      router.push("/");
    }
  }, [router, currentUserNickname, currentUserEmail]);

  // Function
  const errorsFor = (attr: string) => {
    if (!updateUserData) return null;
    const error = updateUserData.updateUser.errors.find(
      (err: any) => err.attribute === attr
    );
    return error && error.messages;
  };

  // DOM
  if (auth0Loading || currentUserLoading) return <Loading />;

  return (
    <BaseLayout>
      <div className={styles.container}>
        <h2 className={styles.title}>会員情報の入力</h2>
        <TextField
          className={styles.inputContainer}
          label="Eメール"
          value={email}
          disabled
        />
        <TextField
          className={styles.inputContainer}
          label="ニックネーム"
          value={nickname}
          error={errorsFor("nickname")}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Button
          label="登録する"
          loading={updateUserLoading}
          onClick={() => updateUser({ variables: { nickname, email } })}
        />
      </div>
    </BaseLayout>
  );
};

export default StartTemplate;
