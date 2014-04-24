server 'ubuntu@54.201.14.115', :app, :web, :primary => true

set :domain, "ubuntu@54.201.14.115"
set :branch, "develop"

role :web,        domain
role :app,        domain, :primary => true
set :deploy_to,   "/var/www/wlg-beta/"

#set :symfony_env_prod, "demo"