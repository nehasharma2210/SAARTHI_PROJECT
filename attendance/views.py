from django.shortcuts import render,redirect
from .models import *

def attendance(request):
    attendancedata=attendances.objects.all()
    if request.method=="GET":
        subfil=request.GET.get('subjectSearch')
        perfil=request.GET.get('serchbyper')
        if( subfil ):
            attendancedata=attendances.objects.filter(sub__icontains=subfil)
        if perfil:
            try:
                # Use list comprehension because `persent()` is not a DB field
               attendancedata = [s for s in attendancedata if float(s.persent) <= float(perfil)]
            except ValueError:
                pass  
    data={
       'attendancedata':attendancedata,
    } 
    return render(request,"attendance.html",data)

# add subject action 
# add subject action 
def attendanceadd(request):
    if request.method=="POST":
        sub=request.POST.get('sub' )
        tcls=request.POST.get('tcls',defult= 0)
        pcls=request.POST.get('pcls' ,defult= 0)
        en=attendances(sub=sub,tcls=tcls,pcls=pcls)
        en.save()
        return  redirect('attendance')
    return render(request,"attendanceadd.html")
#delete attendance data from database 
def delete_item(request,id):
    form= attendances.objects.get(id=id)
    form.delete()
    
    return redirect('attendance')
# Create your views here.
def add_present(request,id):
     add= attendances.objects.get(id=id)
     add.tcls+=1
     add.pcls+=1
     add.save()
     return redirect('attendance')
def add_absent(request,id):
        add= attendances.objects.get(id=id) 
        add.tcls+=1
        add.save()   
        return redirect('attendance')