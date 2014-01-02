
echo "--- Debut reinit dev ---"

php app/console assets:install web --symlink
php app/console apc:clear
php app/console cache:clear
php app/console doctrine:database:drop --force
php app/console doctrine:database:create
php app/console doctrine:schema:create
php app/console doctrine:fixtures:load --append --purge-with-truncate

echo "--- Fin reinit dev ---"

