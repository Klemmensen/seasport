from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.Home.as_view(), name='home'),
    url(r'boats/view/(?P<id>[0-9]+)$', views.Boats.as_view(), name='boat'),
    url(r'boats/edit/(?P<id>[0-9]+)$', views.BoatsEdit.as_view(), name='boat-edit'),
    url(r'boats$', views.BoatsAll.as_view(), name='boats-all'),
]