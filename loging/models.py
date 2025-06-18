from django.db import models
class loging(models.Model):
    user_name=models.CharField(max_length=20,default=None)
    password = models.CharField(max_length=20)
# Create your models here.
class flashcard(models.Model):
    que=models.TextField()
    ans=models.TextField()
class Pomodoro_Timer(models.Model):
    time=models.IntegerField(default=30)   
class contact(models.Model):
    name=models.CharField(max_length=50)
    contect_email= models.EmailField()  
    message=models.TextField()                                                        
class help(models.Model) :
    key=models.TextField() 
    ans=models.TextField() 
    
