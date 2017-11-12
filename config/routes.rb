Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#index'

  #resources :schools
  
  get '/schools/search' => 'schools#search', defaults: { format: 'json' }
  get '/schools/:id'    => 'schools#show', defaults: { format: 'json' }

  # # Qualifications.
  # post '/qualifications'          => 'qualifications#create'
  # get  '/qualifications/:qualification_id' => 'qualifications#index'

  #get '/schools',              to: redirect('/'), as: :schools

end
