Rails.application.routes.draw do
  # HTTPVERB "/URI", to: "CONTROLLERNAME#ACTION"
  get "/first", to: "application#first"
  get "/students", to: "students#index"
  
  # resources :students
end
