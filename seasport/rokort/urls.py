from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.Home.as_view(), name='home'),
    url(r'user/view/(?P<id>[0-9]+)$', views.User.as_view(), name='user'),
    url(r'user/edit/(?P<id>[0-9]+)$', views.UserEdit.as_view(), name='user-edit'),
    url(r'users$', views.UsersAll.as_view(), name='users-all'),
]