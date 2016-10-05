from django.conf.urls import url, include

from . import views

urlpatterns = [
    url(r'^$', views.Homes.as_view(), name='front-home'),
    url(r'^rokort/', include('rokort.urls'))
]