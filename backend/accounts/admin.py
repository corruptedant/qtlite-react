from django.contrib import admin

from .models import (Account, Debit, Credit)

# Register your models here.

class DebitInline(admin.TabularInline):
    fields = ['date', 'description', 'value']
    model = Debit
    extra = 3

class CreditInline(DebitInline):
    model = Credit

@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'user']
    inlines = [DebitInline, CreditInline]

@admin.register(Debit)
class DebitAdmin(admin.ModelAdmin):
    list_display = ['id', 'account_name','value']

    def account_name(self, obj):
        return obj.account.name

@admin.register(Credit)
class CreditAdmin(admin.ModelAdmin):
    list_display = ['id', 'account_name','value']

    def account_name(self, obj):
        return obj.account.name