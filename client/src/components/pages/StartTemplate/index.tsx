import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { gql, useMutation } from "@apollo/client";

import BaseLayout from "../../layouts/BaseLayout";

const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($nickname: String!, $email: String!) {
    updateUser(input: { nickname: $nickname, email: $email }) {
      result
    }
  }
`;

const StartTemplate = () => {
  const { user, isLoading } = useAuth0();
  const email = user?.email;
  const [nickname, setNickname] = useState("");

  const [updateUser] = useMutation(UPDATE_USER_MUTATION, {
    onError: (error) => {
      console.log(error);
    },
    onCompleted: (data) => {
      console.log(data);
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  return (
    <BaseLayout>
      <div>会員初回</div>
    </BaseLayout>
  );
};

export default StartTemplate;
