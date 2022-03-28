module Types
  class PostPvLogType < Types::BaseObject
    # デフォルト
    field :id,         Int,                             null: false
    field :post_id,    Int,                             null: false
    field :ip_address, String,                          null: true
    field :user_agent, String,                          null: true
    field :note,       String,                          null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    # 関連
    field :post,       Types::PostType,                 null: false
  end
end
