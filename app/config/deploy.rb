set :application, "newStart"
set :domain,      "beta.havefyve.com"
set :deploy_to,   "/var/www/havefyve"

set :app_path,    "app"
set :branch, 	  "develop"

set :repository,  "git@github.com:thomandre/newStart.git"
set :scm,         :git

set :model_manager, "doctrine"

set :clear_controllers, false

set :use_sudo,      false
set :keep_releases,  3
set :shared_files,      ["app/config/parameters.yml"]
set :shared_children,     [app_path + "/logs", web_path + "/uploads", "vendor"]
set :use_composer, true

set :user,                "ubuntu"
set :writable_dirs,       ["app/cache", "app/logs"]
set :writable_dirs,       ["app/cache"]
set :webserver_user,      "www-data"
set :use_set_permissions, true

ssh_options[:keys] = ["/Users/thomasandre/.ssh/havefyve-beta.pem"]


logger.level = Logger::MAX_LEVEL

server 'ubuntu@54.201.14.115', :app, :web, :primary => true
