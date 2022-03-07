from django.shortcuts import render

from rest_framework import generics

from .serializers import AccountSerializer

from .models import Account

# Create your views here.
class AccountsList(generics.ListCreateAPIView):
    serializer_class = AccountSerializer

    def get_queryset(self):
        return Account.objects.filter(user=self.request.user)
