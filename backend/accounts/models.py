import uuid

from django.conf import settings
from django.db import models
from django.db.models import Sum

# Create your models here.

class Account(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, blank=True, null=True)
    name = models.CharField(max_length=128, null=False, blank=False)

    def __str__(self):
        return self.name
    
    def amount(self):
        return self.debits.all().aggregate(total_debit = Sum('debit'))['total_debit'] - self.credits.all().aggregate(total_credit = Sum('credit'))['total_credit']


class Debit(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    date = models.DateField()
    description = models.CharField(max_length=128, null=False, blank=False)
    debit = models.DecimalField(max_digits=14, decimal_places=4)
    account = models.ForeignKey(Account, related_name='debits', on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.account} / {self.value}'

class Credit(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    date = models.DateField()
    description = models.CharField(max_length=128, null=False, blank=False)
    credit = models.DecimalField(max_digits=14, decimal_places=4)
    account = models.ForeignKey(Account, related_name='credits', on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'{self.account} / {self.value}'
