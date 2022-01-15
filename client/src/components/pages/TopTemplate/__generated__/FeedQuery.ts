/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FeedQuery
// ====================================================

export interface FeedQuery_feed_user {
  __typename: "User";
  nickname: string | null;
}

export interface FeedQuery_feed_touches_user {
  __typename: "User";
  id: number;
}

export interface FeedQuery_feed_touches {
  __typename: "Touch";
  kind: string;
  user: FeedQuery_feed_touches_user;
}

export interface FeedQuery_feed {
  __typename: "Post";
  id: number;
  body: string;
  createdAtText: string;
  user: FeedQuery_feed_user;
  touches: FeedQuery_feed_touches[] | null;
}

export interface FeedQuery {
  feed: FeedQuery_feed[];
}
