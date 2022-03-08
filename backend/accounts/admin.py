from django.contrib import admin

from .models import (Account, Debit, Credit)

# Register your models here.

class DebitInline(admin.TabularInline):
    fields = ['date', 'description', 'debit']
    model = Debit
    extra = 3

class CreditInline(admin.TabularInline):
    fields = ['date', 'description', 'credit' ]
    model = Credit
    extra = 3

@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'user']
    inlines = [DebitInline, CreditInline]

@admin.register(Debit)
class DebitAdmin(admin.ModelAdmin):
    list_display = ['id', 'account_name','debit']

    def account_name(self, obj):
        return obj.account.name

@admin.register(Credit)
class CreditAdmin(admin.ModelAdmin):
    list_display = ['id', 'account_name','credit']

    def account_name(self, obj):
        return obj.account.name