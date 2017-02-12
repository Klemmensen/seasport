# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2017-02-12 11:07
from __future__ import unicode_literals

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Boat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('boat_image', models.ImageField(upload_to='uploads/clubs/aarhus_kano_og_kajak/boats/')),
                ('boat_name', models.CharField(max_length=30)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'ordering': ['-created_at', 'boat_name'],
            },
        ),
        migrations.CreateModel(
            name='Club',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('contact_person', models.CharField(max_length=40)),
                ('contact_person_email', models.EmailField(max_length=254)),
                ('contact_person_phone', models.IntegerField(default=0)),
                ('zip_code', models.IntegerField(default=0)),
                ('city', models.CharField(max_length=30)),
                ('street', models.CharField(max_length=30)),
                ('house_number', models.IntegerField(blank=True, null=True)),
                ('house_floor', models.IntegerField(blank=True, null=True)),
                ('house_unit', models.CharField(blank=True, max_length=15, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'ordering': ['name'],
                'get_latest_by': 'created_at',
            },
        ),
        migrations.AddField(
            model_name='boat',
            name='club',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rokort.Club'),
        ),
    ]
