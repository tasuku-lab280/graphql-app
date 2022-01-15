// Import
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { gql, useQuery, useMutation } from '@apollo/client';

// Custom Import
import { setCurrentUser } from 'services/redux/slice/currentUser';
import { CurrentUserQuery } from './__generated__/CurrentUserQuery';
import { UpdateUserMutation } from './__generated__/UpdateUserMutation';

// Query
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
      user {
        id
        email
        nickname
      }
      errors {
        attribute
        messages
      }
    }
  }
`;

export const useAfterLogin = () => {
  // Hooks
  const router = useRouter();
  const [nickname, setNickname] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const dispatch = useDispatch();

  const { user: auth0User, isLoading: auth0Loading } = useAuth0();
  const email = auth0User?.email;

  const { data: currentUserData, loading: currentUserLoading } =
    useQuery<CurrentUserQuery>(CURRENT_USER_QUERY);
  const currentUserNickname = currentUserData?.currentUser?.nickname;
  const currentUserEmail = currentUserData?.currentUser?.email;

  const [updateUser, { data: updateUserData, loading: updateUserLoading }] =
    useMutation<UpdateUserMutation>(UPDATE_USER_MUTATION, {
      onCompleted: () => {
        const updateUser = updateUserData?.updateUser;
        if (updateUser && updateUser.errors.length > 0) return;
        if (updateUser) dispatch(setCurrentUser({ user: updateUser.user }));
        router.push('/');
      },
      onError: (error) => {
        alert(`システムエラーが発生しました。\n${error}`);
      },
    });
  const updateUserErrors = updateUserData?.updateUser?.errors;

  useEffect(() => {
    if (currentUserData) {
      if (currentUserNickname && currentUserEmail) {
        dispatch(setCurrentUser({ user: currentUserData.currentUser }));
        router.push('/');
      }
      setIsProcessing(true);
    }
  }, [dispatch, currentUserData, router, currentUserNickname, currentUserEmail]);

  // Const
  const loading = auth0Loading || currentUserLoading || isProcessing;

  return [
    {
      nickname,
      email,
      loading,
      updateUserLoading,
      updateUserErrors,
      setNickname,
      updateUser,
    },
  ];
};
