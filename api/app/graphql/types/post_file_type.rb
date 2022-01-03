module Types
  class PostFileType < Types::BaseObject
    # デフォルト
    field :id,         Int,                             null: false
    field :post_id,    Int,                             null: false
    field :kind,       Int,                             null: false
    field :seq,        String,                          null: false
    field :file,       String,                          null: false
    field :note,       String,                          null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    # 関連
    field :post,       Types::PostType,                 null: false
  end
end
