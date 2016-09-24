from django.db import models


class Club(models.Model):

    name = models.CharField(max_length=30)
    contact_person = models.CharField(max_length=40)
    contact_person_email = models.EmailField(max_length=254)
    contact_person_phone = models.IntegerField(default=0)
    zip_code = models.IntegerField(default=0)
    city = models.CharField(max_length=30)
    street = models.CharField(max_length=30)
    house_number = models.IntegerField(blank=True, null=True)
    house_floor = models.IntegerField(blank=True, null=True)
    house_unit = models.CharField(blank=True, null=True, max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['name']
        get_latest_by = 'created_at'


class User(models.Model):

    CLUB_ADMIN = 'club_admin'
    CLUB_USER = 'club_user'
    SYSTEM_USER = 'system_user'

    USER_TYPE_CHOICES = (
        (CLUB_ADMIN, 'Administrator'),
        (CLUB_USER, 'User'),
        (SYSTEM_USER, 'System user')
    )

    club = models.ForeignKey(Club, on_delete=models.CASCADE)
    user_type = models.CharField(max_length=30, choices=USER_TYPE_CHOICES, default=CLUB_USER)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    birthday = models.DateField(blank=True, null=True)
    email = models.EmailField(max_length=254)
    phone = models.IntegerField(blank=True, null=True)
    password = models.CharField(max_length=50)
    zip_code = models.IntegerField(blank=True, null=True)
    city = models.CharField(blank=True, null=True, max_length=30)
    street = models.CharField(blank=True, null=True, max_length=30)
    house_number = models.IntegerField(blank=True, null=True, default=None)
    house_floor = models.IntegerField(blank=True, null=True, default=None)
    house_unit = models.CharField(blank=True, null=True, max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at', 'first_name']