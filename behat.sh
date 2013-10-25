./sf cache:clear --env=test
./reset_bdd.sh --env=test

bin/behat @newStartCommonBundle $1 $2
