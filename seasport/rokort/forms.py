from django import forms

from . import models


class BoatForm(forms.ModelForm):

    image = forms.ImageField(required=False, widget=forms.FileInput, error_messages = {'invalid':"Image files only"})

    class Meta:
        model = models.Boat
        fields = ['name', 'image']
        error_messages = \
        {
            'name':
            {
                'min_length': "- Fornavn skal være på mindst 30 bogstaver",
                'max_length': "- Fornavn må højst være på 30 bogstaver",
                'required': "- Fornavn skal udfyldes",
                'invalid': "- Fornavn er ugyldig"
            }
        }