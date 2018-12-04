#!/bin/bash

set -e -u # Exit immediately for unhandled errors or undefined variables

mkdir -p /app/logs
touch /app/logs/concordia.log

celery -A concordia beat