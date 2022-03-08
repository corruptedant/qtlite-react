from rest_framework import serializers

from .models import (Account, Debit, Credit)

class CreditSerializer(serializers.ModelSerializer):
    class Meta:
        model = Credit
        fields = ['id', 'date', 'description', 'credit', 'date_created']

class DebitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Debit
        fields = ['id', 'date', 'description', 'debit', 'date_created']

class AccountSerializer(serializers.ModelSerializer):
    credits = CreditSerializer(many=True, read_only=True)
    debits = DebitSerializer(many=True, read_only=True)
    class Meta:
        model = Account
        fields = ['id', 'name', 'amount', 'credits', 'debits']
