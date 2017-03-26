#!/bin/sh
npm run release
scp -r -P 2222 ./dist/production/* thatilike@192.185.21.105:/home4/thatilike/public_html/thatilike.com/