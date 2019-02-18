#! /bin/bash

yarn build

git rev-parse HEAD >public/git.txt

rsync -a --delete --stats public/ nils@nilshartmann.net:/home/nils/htdocs/nilshartmann.net/gatsby