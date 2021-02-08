Rails.application.routes.draw do
  resources :signups, only: [:index, :new, :create]

  
  
  get '/activities', to: "activities#index", as: "activities"
  get "/activities/:id", to: "activities#show", as: "activity"
  
  
  get '/campers', to: "campers#index", as: "campers"
  get "/campers/new", to: "campers#new", as: "new_camper"
  get "/campers/:id", to: "campers#show", as: "camper"
  post "/campers", to: "campers#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
