module Types
  class TagType < Types::BaseObject
    # デフォルト
    field :id,         Int,                             null: false
    field :name,       String,                          null: false
    field :note,       String,                          null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    # 関連
    field :posts,      [Types::PostType],               null: false
  end
end
