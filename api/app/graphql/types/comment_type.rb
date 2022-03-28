module Types
  class CommentType < Types::BaseObject
    # デフォルト
    field :id,         Int,                             null: false
    field :user_id,    Int,                             null: false
    field :post_id,    Int,                             null: false
    field :body,       String,                          null: false
    field :note,       String,                          null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    # 関連
    field :user,       Types::UserType,                 null: false
    field :post,       Types::PostType,                 null: false
  end
end
