#!/bin/bash
php app/console doctrine:database:drop --force $1
php app/console doctrine:database:create $1
php app/console doctrine:schema:create $1
#php app/console doctrine:fixtures:load --append $1