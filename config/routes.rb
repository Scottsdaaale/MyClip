Rails.application.routes.draw do
  resources :comments
  resources :ratings
  resources :users
  resources :clips
  # route to test your configuration
  
  post "/login", to: "session#create"
  get "/userInSession", to: "session#get_logged_in_user"
  delete "/logout", to: "session#destroy"
  get "/most_comments", to: "highest_comment_count#index"
  get "/default_order", to: "default_order#index"
  get "/newest_post", to: "newest_post#index"
end
