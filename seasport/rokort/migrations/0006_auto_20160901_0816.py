# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-09-01 06:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rokort', '0005_club_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='club',
            name='contact_person_phone',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='club',
            name='house_floor',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='club',
            name='house_number',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='club',
            name='zip_code',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='user',
            name='house_floor',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='user',
            name='house_number',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='user',
            name='phone',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='zip_code',
            field=models.IntegerField(),
        ),
    ]
