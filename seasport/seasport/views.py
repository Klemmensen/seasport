from django.shortcuts import render
from django.views.generic.base import TemplateView

class Homes(TemplateView):

    template_name = 'home/index.html'
    context = { 'metaTitle':'Frontend page title', 'pageTitle':'Frontend - Page title' }

    def get(self, request):
        return render(request, self.template_name, self.context)