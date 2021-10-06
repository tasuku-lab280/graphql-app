module Types
  class ArticleType < Types::BaseObject
    field :id, ID, null: false
    field :status_text, String, null: true
    field :title, String, null: true
    field :body, String, null: true
  end
end
