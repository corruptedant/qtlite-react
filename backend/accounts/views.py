from django.shortcuts import render

from rest_framework import generics

from rest_framework.permissions import IsAuthenticated
from .permissions import IsOwnerOrReadOnly

from .serializers import AccountSerializer, CreditSerializer, DebitSerializer

from .models import Account, Credit, Debit

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
    permission_classes = [IsAuthenticated]

class DebitDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = DebitSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Debit.objects.filter(account__user=self.request.user)

class CreditList(generics.CreateAPIView):
    serializer_class = CreditSerializer
    permission_classes = [IsAuthenticated]

class CreditDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CreditSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Credit.objects.filter(account__user=self.request.user)