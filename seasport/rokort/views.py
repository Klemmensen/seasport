from django.shortcuts import redirect
from django.shortcuts import render
from django.views.generic.base import TemplateView

from . import forms
from . import models


class Home(TemplateView):

    template_name = 'rokort/home/index.html'
    context = { 'metaTitle':'Home page title', 'pageTitle':'Admin - Home page title' }

    def get(self, request):
        return render(request, self.template_name, self.context)


class Boats(TemplateView):

    template_name = 'rokort/boat/single-view.html'
    Boats = models.Boat.objects.all()
    context = {'metaTitle': 'Admin - Users Overview', 'pageTitle':'Admin - All boats', 'Boats': Boats}

    def get(self, request):
        return render(request, self.template_name, self.context)


class BoatsEdit(TemplateView):

    template_name = 'rokort/boat/single-edit.html'
    context = {'metaTitle': 'Admin - User single edit page', 'pageTitle':'Admin - Boat single edit page'}

    def get(self, request, id):
        try:
            self.context['Boat'] = models.Boat.objects.get(pk=id)
            self.context['BoatForm'] = forms.BoatForm(instance=self.context['Boat'])
            self.context['Valid'] = 0
            return render(request, self.template_name, self.context)
        except models.Boat.DoesNotExist:
            return redirect('boats-all')

    def post(self, request, id):
        boat_object = models.Boat.objects.get(pk=id)
        boat_form = forms.BoatForm(request.POST, instance=boat_object)
        self.context['UserForm'] = boat_form

        if boat_form.is_valid():
            boat_form.save()
            self.context['Valid'] = 1
            self.context['SuccessMessage'] = 'Bådens data er opdateret'

        return render(request, self.template_name, self.context)


class BoatsAll(TemplateView):

    template_name = 'rokort/boat/all.html'
    context = {'metaTitle': 'Admin - Users Overview', 'pageTitle': 'Admin - All boats'}

    def get(self, request):
        self.context['Boats'] = models.Boat.objects.all()
        return render(request, self.template_name, self.context)