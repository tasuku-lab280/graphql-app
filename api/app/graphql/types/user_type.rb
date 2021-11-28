module Types
  class UserType < Types::BaseObject
    field :id, Int, null: false
    field :email, String, null: true
    field :nickname, String, null: true
  end
end
