#!/usr/bin/env python
import os
import sys
import pymysql
import django

# We are using pymysql database driver for Python - Django needs to know about this:
pymysql.install_as_MySQLdb();

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "seasport.settings")

    django.setup();

    from django.core.management.commands.runserver import Command as runserver
    runserver.default_port = "8080"

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
