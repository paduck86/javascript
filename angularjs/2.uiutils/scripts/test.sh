#!/bin/bash
BASE_DIR='..'
echo ""
echo "Starting Karma Server (http://karma-runner.github.io)"
echo "-----------------------------------------------------"
echo $BASE_DIR/conf/karma.conf.js $*
karma start $BASE_DIR/conf/karma.conf.js $*
