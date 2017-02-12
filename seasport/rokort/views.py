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
    context = {'metaTitle': 'KayakManager - Bådoversigt', 'pageTitle':'Båd oversigt', 'Boats': Boats}

    def get(self, request):
        return render(request, self.template_name, self.context)


class BoatsEdit(TemplateView):

    template_name = 'rokort/boat/single-edit.html'
    context = {'metaTitle': 'KayakManager - Edit boat', 'pageTitle':'Edit boat'}

    def get(self, request, id):
        self.context['error'] = False
        try:
            self.context['boat'] = models.Boat.objects.get(pk=id)
            return render(request, self.template_name, self.context)
        except models.Boat.DoesNotExist:
            return redirect('boats-all')

    def post(self, request, id):
        status = forms.BoatForm.validate(self, request)
        if status['status']:
            boat = models.Boat.objects.get(pk=id)
            boat.slug_name = request.POST.get('name').strip().lower().replace( 'æ', 'ae' ).replace( 'ø', 'oe' ).replace( 'å', 'aa' ).replace( ' ', '-' )
            boat.name = request.POST.get('name').strip()
            boat.save()

            self.context['error'] = False
            self.context['success_message'] = status['message']
        else:
            self.context['error_messages'] = status['error_messages']
            self.context['error'] = True

        return render(request, self.template_name, self.context)


class BoatsAll(TemplateView):

    template_name = 'rokort/boat/all.html'
    context = {'metaTitle': 'Admin - Boat Overview', 'pageTitle': 'Admin - All boats'}

    def get(self, request):
        self.context['Boats'] = models.Boat.objects.all()
        return render(request, self.template_name, self.context)