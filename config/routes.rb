Rails.application.routes.draw do
  
  resources :reviews
  # resources :users, only: :index 
  resources :items, only: [:index, :show, :create, :destroy]
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # get "/items/:s/:n", to: "items#less_or_more"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
