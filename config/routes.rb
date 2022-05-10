Rails.application.routes.draw do
  resources :ratings
  resources :users
  resources :clips
  # route to test your configuration
  get '/hello', to: 'application#hello_world'
  
end
