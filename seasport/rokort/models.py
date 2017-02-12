from django.core.validators import MinLengthValidator
from django.db import models


class Club(models.Model):

    name = models.CharField(max_length=80)
    slug_name = models.CharField(max_length=80, default='')
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


class Boat(models.Model):

    club = models.ForeignKey(Club, on_delete=models.CASCADE, db_index=True)
    name = models.CharField(max_length=80, default='', validators=[MinLengthValidator(3, message='Mindst 3 bogstaver..')])
    slug_name = models.CharField(max_length=80, default='')
    image = models.ImageField(upload_to='static/rokort/img/uploads/clubs/aarhus_kano_og_kajak/boats/', default='', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at', 'name']