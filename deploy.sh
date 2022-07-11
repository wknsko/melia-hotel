#!/usr/bin/env sh
set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git checkout -b gh-pages
git push -f git@github.com:wknsko/melia-hotel.git gh-pages