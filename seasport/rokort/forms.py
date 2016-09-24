from django import forms
from . import models


class UserForm(forms.ModelForm):

    class Meta:
        model = models.User
        fields = ['first_name', 'last_name', 'email']
        error_messages = \
        {
            'first_name':
            {
                'min_length': "- Fornavn skal være på mindst 30 bogstaver",
                'max_length': "- Fornavn må højst være på 30 bogstaver",
                'required': "- Fornavn skal udfyldes",
                'invalid': "- Fornavn er ugyldig"
            },
            'last_name':
            {
                'min_length': "- Efternavn skal være på mindst 30 bogstaver",
                'max_length': "- Efternavn må højst være på 30 bogstaver",
                'required': "- Efternavn skal udfyldes",
                'invalid': "- Efternavn er ugyldig"
            },
            'email':
            {
                'required': "- Email skal udfyldes",
                'invalid': "- Email er ugyldig"
            }
        }