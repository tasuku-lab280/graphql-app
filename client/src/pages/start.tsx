import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { gql, useMutation } from "@apollo/client";
import { Container, Card, CardContent, TextField, Button } from "@mui/material";

import Header from "../components/layouts/Header";

const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($nickname: String!, $email: String!) {
    updateUser(input: { nickname: $nickname, email: $email }) {
      result
    }
  }
`;

const StartPage = () => {
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

  if (isLoading) return <p>Loading ...</p>;
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Card variant="outlined" sx={{ minWidth: 275 }}>
          <CardContent sx={{ padding: 5 }}>
            <TextField
              id="outlined-required"
              label="ニックネーム"
              defaultValue={nickname}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              className="mt-10"
              id="outlined-required"
              label="Eメール"
              defaultValue={email}
              required
              disabled
              fullWidth
            />
            <Button
              className="mt-10"
              variant="contained"
              onClick={() => updateUser({ variables: { nickname, email } })}
            >
              登録する
            </Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default StartPage;
