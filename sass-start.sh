#!/bin/bash
echo Compiling your sass ...
sass scss/ionic.app.scss:www/css/styles.css
sass --watch scss/ionic.app.scss:www/css/styles.css