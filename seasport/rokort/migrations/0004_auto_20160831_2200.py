# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-08-31 20:00
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rokort', '0003_club_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='club',
        ),
        migrations.DeleteModel(
            name='Club',
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
