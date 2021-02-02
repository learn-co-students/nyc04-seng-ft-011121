Rails.application.routes.draw do
  # HTTPVERB "/URI", to: "CONTROLLERNAME#ACTION"
    # Write out your routes from the most specific to the general
  get "/first", to: "application#first"

  get "/students", to: "students#index"
  get "/students/new", to: "students#new"
  post "/students", to: "students#create"
  get "/students/:id", to: "students#show"
  
  # resources :students
end
