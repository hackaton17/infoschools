Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#index'

  get '/schoolbs/list' => 'schoolbs#list', defaults: {format: 'json'}
  get '/schoolbs/search' => 'schoolbs#search', defaults: { format: 'json' }
  get '/schoolbs/:id'    => 'schoolbs#show', defaults: { format: 'json' }
  get '/schoolbs/intervals/:test/:lo/:hi'  => 'schoolbs#intervals', defaults: { format: 'json' }
  # # Qualifications.
  # post '/qualifications'          => 'qualifications#create'
  # get  '/qualifications/:qualification_id' => 'qualifications#index'

  #get '/schools',              to: redirect('/'), as: :schools

end
