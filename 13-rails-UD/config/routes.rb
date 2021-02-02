Rails.application.routes.draw do
  # HTTPVERB "/URI", to: "CONTROLLERNAME#ACTION"
    # Write out your routes from the most specific to the general
  get "/first", to: "application#first"

  patch "/students/:id/increase", to: "students#increase"
  # resources :students
  get "/students", to: "students#index", as: "students"
  get "/students/new", to: "students#new", as: "new_student"
  post "/students", to: "students#create"
  get "/students/:id", to: "students#show", as: "student"
  get "/students/:id/edit", to: "students#edit", as: "edit_student"
  patch "/students/:id", to: "students#update"
  delete "/students/:id", to: "students#destroy"
  
end
