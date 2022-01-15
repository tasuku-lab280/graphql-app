/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: post
// ====================================================

export interface post_user {
  __typename: "User";
  nickname: string | null;
}

export interface post_touches_user {
  __typename: "User";
  id: number;
}

export interface post_touches {
  __typename: "Touch";
  kind: string;
  user: post_touches_user;
}

export interface post {
  __typename: "Post";
  body: string;
  createdAtText: string;
  user: post_user;
  touches: post_touches[] | null;
}
