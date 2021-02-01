Rails.application.routes.draw do
  # HTTPVERB "/URI", to: "CONTROLLERNAME#ACTION"
  get "/first", to: "application#first"

end
