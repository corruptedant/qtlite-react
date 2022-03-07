from django.conf import settings
from django.db import models

# Create your models here.

class Account(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, blank=True, null=True)
    name = models.CharField(max_length=128, null=False, blank=False)

    def __str__(self):
        return self.name

class Debit(models.Model):
    date = models.DateField()
    value = models.DecimalField(max_digits=14, decimal_places=4)
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.account} / {self.value}'

class Credit(models.Model):
    date = models.DateField()
    value = models.DecimalField(max_digits=14, decimal_places=4)
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'{self.account} / {self.value}'
