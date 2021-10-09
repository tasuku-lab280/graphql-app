module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :current_user, resolver: Resolvers::CurrentUserResolver

    field :articles, [Types::ArticleType], null: false
    def articles
      Article.all
    end

    field :article, Types::ArticleType, null: false do
      argument :id, Int, required: false
    end
    def article(id:)
      Article.find(id)
    end
  end
end
