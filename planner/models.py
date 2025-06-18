from django.db import models
class plannerdt(models.Model):
    task=models.CharField(max_length=100)
    date=models.DateField()
# Create your models here.
