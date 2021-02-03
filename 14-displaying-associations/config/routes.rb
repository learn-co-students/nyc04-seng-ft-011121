Rails.application.routes.draw do
  resources :grades
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

  
  patch "/courses/:id/enroll", to: "courses#enroll", as: "enroll_course"
  
  # resources :courses
  get "/courses", to: "courses#index", as: "courses"
  get "/courses/new", to: "courses#new", as: "new_course"
  post "/courses", to: "courses#create"
  get "/courses/:id", to: "courses#show", as: "course"
  get "/courses/:id/edit", to: "courses#edit", as: "edit_course"
  patch "/courses/:id", to: "courses#update"
  delete "/courses/:id", to: "courses#destroy"
  
end
