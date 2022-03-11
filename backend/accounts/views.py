from django.shortcuts import render

from rest_framework import generics

from rest_framework.permissions import IsAuthenticated
from .permissions import IsOwnerOrReadOnly

from .serializers import AccountSerializer, CreditSerializer, DebitSerializer

from .models import Account

# Create your views here.
class AccountsList(generics.ListCreateAPIView):
    serializer_class = AccountSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

    def get_queryset(self):
        return Account.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)

class DebitList(generics.CreateAPIView):
    serializer_class = DebitSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

class CreditList(generics.CreateAPIView):
    serializer_class = CreditSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]