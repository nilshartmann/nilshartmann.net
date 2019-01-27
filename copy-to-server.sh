#! /bin/bash

gatsby build

scp -r public/* nils@nilshartmann.net:/home/nils/htdocs/nilshartmann.net