from django.db import models
from datetime import datetime
class expenses(models.Model):
    des=models.TextField()
    amount=models.IntegerField()
    date=models.DateField() 
    # @property
    # def totalamount(self):
        
    # for takig data from the expensses
# Create your models here.
