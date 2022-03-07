from django.urls import path

from rest_framework.urlpatterns import format_suffix_patterns

from accounts import views

urlpatterns = [
    path('api/v1/accounts', views.AccountsList.as_view())
]
