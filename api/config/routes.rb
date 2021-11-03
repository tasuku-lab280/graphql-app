Rails.application.routes.draw do
  if Rails.env.development?
    # add the url of your end-point to graphql_path.
    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
  end
  post '/graphql', to: 'graphql#execute'

  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end
end
