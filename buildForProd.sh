#!/bin/bash
rm -rf ./prod.zip
zip -r ./prod.zip ./build ./build_server ./package.json
