# Generated by Django 4.0.3 on 2022-03-08 10:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_alter_credit_id_alter_debit_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='credit',
            old_name='value',
            new_name='credit',
        ),
        migrations.RenameField(
            model_name='debit',
            old_name='value',
            new_name='debit',
        ),
    ]
