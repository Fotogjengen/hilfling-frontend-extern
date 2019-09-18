#!/usr/bin/env bash

ssh -i ./deploy_key hilfling@$SERVER_IP_ADDRESS '
cd /var/www/hilfling-frontend-extern &&
git pull &&
docker-compose up -d --build
'
