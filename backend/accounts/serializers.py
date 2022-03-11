from urllib import request
from rest_framework import serializers

from .models import (Account, Debit, Credit)

class CreditSerializer(serializers.ModelSerializer):
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        user_accounts = Account.objects.filter(user=self._user)
        self.fields['account'] = serializers.PrimaryKeyRelatedField(
            required=False,
            many=False,
            read_only=False,
            queryset=user_accounts,
            default=user_accounts
        )

    @property
    def _user(self):
        request = self.context.get('request', None)
        if request:
            return request.user

    class Meta:
        model = Credit
        fields = ['id', 'date', 'description', 'credit', 'date_created']

class DebitSerializer(serializers.ModelSerializer):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        user_accounts = Account.objects.filter(user=self._user)
        self.fields['account'] = serializers.PrimaryKeyRelatedField(
            required=False,
            many=False,
            read_only=False,
            queryset=user_accounts,
            default=user_accounts
        )

    @property
    def _user(self):
        request = self.context.get('request', None)
        if request:
            return request.user

    class Meta:
        model = Debit
        fields = ['id', 'date', 'description', 'debit', 'date_created']

class AccountSerializer(serializers.ModelSerializer):
    credits = CreditSerializer(many=True, read_only=True)
    debits = DebitSerializer(many=True, read_only=True)
    class Meta:
        model = Account
        fields = ['id', 'name', 'amount', 'credits', 'debits']
