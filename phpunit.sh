./sf cache:clear --env=test
./sf doctrine:database:drop --force --env=test
./sf doctrine:database:create --env=test
./sf doctrine:schema:update --force --env=test



/usr/local/bin/phpunit -c app $1 $2