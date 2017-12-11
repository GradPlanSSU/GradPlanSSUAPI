#!/bin/bash
forever start -a -o stdout.txt -l stdlog.txt -e stderr.txt bin/www
forever list
echo "If latest process not stopped then API running normally"
