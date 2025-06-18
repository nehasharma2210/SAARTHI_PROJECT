from django import forms
from attendance.models import attendances
class attendances(forms.Form):
    sub=forms.CharField(max_length=50)
    tcls=forms.IntegerField()
    pcls= forms.IntegerField()
