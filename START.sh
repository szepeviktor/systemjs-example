#!/bin/bash

# Build
npm install
node_modules/.bin/jspm install
node_modules/.bin/jspm bundle css + main + jquery-slim --skip-source-maps bundle.js

# Serve files
node_modules/.bin/http-server -a 0.0.0.0 -p 8080
#php -S 0.0.0.0:8080
#python3 -m http.server 8080
