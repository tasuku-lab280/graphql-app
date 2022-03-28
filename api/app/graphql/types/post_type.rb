module Types
  class PostType < Types::BaseObject
    # デフォルト
    field :id,              Int,                             null: false
    field :user_id,         Int,                             null: false
    field :status,          String,                          null: false
    field :body,            String,                          null: false
    field :pv,              Int,                             null: true
    field :note,            String,                          null: true
    field :created_at,      GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at,      GraphQL::Types::ISO8601DateTime, null: false

    # 関連
    field :user,            Types::UserType,                 null: false
    field :post_files,      [Types::PostFileType],           null: true
    field :images,          [Types::PostFileType],           null: true
    field :files,           [Types::PostFileType],           null: true
    field :post_pv_logs,    [Types::PostPvLogType],          null: true
    field :tags,            [Types::TagType],                null: true
    field :touches,         [Types::TouchType],              null: true
    field :comments,        [Types::CommentType],            null: true

    # メソッド
    field :created_at_text, String,                          null: false
  end
end
