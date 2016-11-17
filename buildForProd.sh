#!/bin/bash
rm -rf ./prod
mkdir ./prod
cp ./package.json ./prod/package.json
cp -r ./build ./prod/build
cp -r ./build-server ./prod/build-server
zip -r ./prod.zip ./prod
