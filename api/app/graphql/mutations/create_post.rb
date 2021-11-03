module Mutations
  class CreatePost < GraphQL::Schema::RelayClassicMutation
    graphql_name 'CreatePost'

    field :post, Types::PostType, null: false
    field :result, Boolean, null: false

    argument :title, String, required: true
    argument :body, String, required: true

    def resolve(**args)
      post = context[:current_user].posts.create(
        title: args[:title],
        body: args[:body],
      )

      {
        post: post,
        result: post.errors.blank?,
      }
    end
  end
end
