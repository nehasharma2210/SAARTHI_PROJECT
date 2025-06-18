from django.shortcuts import render, redirect
from loging.models import *
def log(request):
    if request.method=="POST":
        name=request.POST.get('name')
        password=request.POST.get('password')
        register=loging(user_name= name,password=password) 
        register.save()
    if(loging.objects.exists()):
        return redirect('home')
    return render(request,"loging.html")

 #contect_model
def  home(request):
    if request.method=="POST":
      name=request.POST.get('name' )  
      contect_email=request.POST.get('contect_email' )
      message=request.POST.get('message')
      cont=contact(name=name,contect_email=contect_email,message=message)
      cont.save()
    loging_data=False
    if(loging.objects.exists()):
         loging_data=True
    user=loging.objects.first()
    helps=help.objects.all()
    cards=flashcard.objects.all()
    time=Pomodoro_Timer.objects.get()
    data={
        "helps":helps,
        'cards':cards,
        'time':time,
        "loging_data":loging_data,
        'user':user
        }
    return render(request,"1.html",data)
def logout(request):
    user = loging.objects.first()  # Gets the first user or None
    user.delete()
    return  redirect('home')
