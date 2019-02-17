#! /bin/bash

yarn build

scp -r public/* nils@nilshartmann.net:/home/nils/htdocs/nilshartmann.net