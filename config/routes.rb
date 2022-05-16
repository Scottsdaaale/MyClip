Rails.application.routes.draw do
  resources :ratings
  resources :users
  resources :clips
  # route to test your configuration
  
  post "/login", to: "session#create"
  get "/userInSession", to: "session#get_logged_in_user"
  delete "/logout", to: "session#destroy"

  
end
