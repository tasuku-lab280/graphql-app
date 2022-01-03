module Types
  class UserType < Types::BaseObject
    # デフォルト
    field :id,         Int,                             null: false
    field :auth0_id,   String,                          null: false
    field :nickname,   String,                          null: true
    field :email,      String,                          null: true
    field :note,       String,                          null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    # 関連
    field :posts,      [Types::PostType],               null: true
    field :touches,    [Types::TouchType],              null: true
    field :comments,   [Types::CommentType],            null: true
    field :followings, [Types::UserType],               null: true
    field :followers,  [Types::UserType],               null: true

    # メソッド
    field :feed,      [Types::PostType],                null: true
  end
end
