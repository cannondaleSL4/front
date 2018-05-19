#!/bin/bash
ng build --prod
docker build -t angular:prod .
docker run -d -p 80:80 angular:prod
