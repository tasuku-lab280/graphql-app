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
  // Hooks
  const { user, isLoading } = useAuth0();
  const [nickname, setNickname] = useState("");

  const [updateUser] = useMutation(UPDATE_USER_MUTATION, {
    onError: (error) => {
      console.log(error);
    },
    onCompleted: (data) => {
      console.log(data);
    },
  });

  // Const
  const email = user?.email;

  // Function
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  // DOM
  return (
    <BaseLayout>
      <div>会員初回</div>
    </BaseLayout>
  );
};

export default StartTemplate;
