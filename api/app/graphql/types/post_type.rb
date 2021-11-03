module Types
  class PostType < Types::BaseObject
    field :id, Int, null: false
    field :status_text, String, null: false
    field :title, String, null: false
    field :body, String, null: false
  end
end
