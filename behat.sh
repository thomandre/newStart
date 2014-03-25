./sf cache:clear --env=test --no-warmup
./reset_bdd.sh --env=test

bin/behat @newStartCommonBundle $1 $2
