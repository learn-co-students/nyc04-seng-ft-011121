Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/login", to: "users#login"
  get "/me", to: "users#me"
  resources :users, only: [:index, :show] do
    resources :tweets, only: [:index]
  end
  resources :tweets, only: [:create]

  mount ActionCable.server => "/cable"
end
