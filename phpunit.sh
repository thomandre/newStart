./sf cache:clear --env=test --no-warmup
./sf doctrine:database:drop --force --env=test
./sf doctrine:database:create --env=test
./sf doctrine:schema:update --force --env=test
./sf doctrine:fixture:load --env=test -n

phpunit --strict -c app $1 $2