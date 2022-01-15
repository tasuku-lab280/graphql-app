/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CurrentUserQuery
// ====================================================

export interface CurrentUserQuery_currentUser {
  __typename: "User";
  id: number;
  email: string | null;
  nickname: string | null;
}

export interface CurrentUserQuery {
  currentUser: CurrentUserQuery_currentUser;
}
