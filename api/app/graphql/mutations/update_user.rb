module Mutations
  class UpdateUser < GraphQL::Schema::RelayClassicMutation
    graphql_name 'UpdateUser'

    field :result, Boolean, null: false

    argument :nickname, String, required: true
    argument :email, String, required: true

    def resolve(**args)
      user = context[:current_user]
      user_params = {
        nickname: args[:nickname],
        email: args[:email],
      }

      if user.update(user_params)
        { result: user.errors.blank? }
      else
        raise GraphQL::ExecutionError, user.errors.full_messages.join("\n")
      end
    end
  end
end
