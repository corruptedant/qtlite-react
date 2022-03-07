from django.urls import path

from .views import (LoginView, logout_view, get_current_user)

urlpatterns = [
    path('api/v1/user/login', LoginView.as_view(), name='login'),
    path('api/v1/user/logout', logout_view),
    path('api/v1/user/me', get_current_user),
]