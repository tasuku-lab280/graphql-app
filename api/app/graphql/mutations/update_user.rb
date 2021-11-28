module Mutations
  class UpdateUser < GraphQL::Schema::RelayClassicMutation
    graphql_name 'UpdateUser'

    field :user, Types::UserType, null: false
    field :errors, [Types::UserError], null: false

    argument :nickname, String, required: true
    argument :email, String, required: true

    def resolve(**args)
      user = context[:current_user]
      user.update(nickname: args[:nickname], email: args[:email])

      {
        user: user,
        errors: user.errors.to_hash().map { |k, v| { attribute: k, messages: v } },
      }
    end
  end
end
