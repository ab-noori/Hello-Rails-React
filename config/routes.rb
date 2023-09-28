Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    get '/greetings/random', to: 'greetings#random'
  end  
end
