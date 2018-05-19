#!/usr/bin/env bash
fuser -k 4200/tcp
ng serve --open

#it's for other scrypt
#port=4201
#fuser -k ${port}/tcp
#ng serve --port ${port}
