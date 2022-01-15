/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUserMutation
// ====================================================

export interface UpdateUserMutation_updateUser_errors {
  __typename: "UserError";
  /**
   * Which input value this error came from
   */
  attribute: string | null;
  /**
   * A description of the error
   */
  messages: string[];
}

export interface UpdateUserMutation_updateUser {
  __typename: "UpdateUserPayload";
  errors: UpdateUserMutation_updateUser_errors[];
}

export interface UpdateUserMutation {
  updateUser: UpdateUserMutation_updateUser | null;
}

export interface UpdateUserMutationVariables {
  nickname: string;
  email: string;
}
