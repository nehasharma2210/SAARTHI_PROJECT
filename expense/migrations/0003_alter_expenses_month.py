# Generated by Django 5.1.3 on 2025-06-08 09:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('expense', '0002_expenses_month'),
    ]

    operations = [
        migrations.AlterField(
            model_name='expenses',
            name='month',
            field=models.IntegerField(default=6, max_length=12),
        ),
    ]
