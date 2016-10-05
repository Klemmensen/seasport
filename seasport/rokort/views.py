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


class User(TemplateView):

    template_name = 'rokort/user/single-view.html'
    Users = models.User.objects.all()
    context = {'metaTitle': 'Admin - Users Overview', 'pageTitle':'Admin - All users', 'Users': Users}

    def get(self, request):
        return render(request, self.template_name, self.context)


class UserEdit(TemplateView):

    template_name = 'rokort/user/single-edit.html'
    context = {'metaTitle': 'Admin - User single edit page', 'pageTitle':'Admin - User single edit page'}

    def get(self, request, id):
        try:
            self.context['User'] = models.User.objects.get(pk=id)
            self.context['UserForm'] = forms.UserForm(instance=self.context['User'])
            self.context['Valid'] = 0
            return render(request, self.template_name, self.context)
        except models.User.DoesNotExist:
            return redirect('users-all')

    def post(self, request, id):
        userobject = models.User.objects.get(pk=id)
        userform = forms.UserForm(request.POST, instance=userobject)
        self.context['UserForm'] = userform

        if userform.is_valid():
            userform.save()
            self.context['Valid'] = 1
            self.context['SuccessMessage'] = 'Din profil er opdateret'

        return render(request, self.template_name, self.context)


class UsersAll(TemplateView):

    template_name = 'rokort/user/all.html'
    context = {'metaTitle': 'Admin - Users Overview', 'pageTitle': 'Admin - All users'}

    def get(self, request):
        self.context['Users'] = models.User.objects.all()
        return render(request, self.template_name, self.context)