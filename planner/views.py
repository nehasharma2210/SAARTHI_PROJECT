from django.shortcuts import render,redirect
from .models import plannerdt
from django.db.models.functions import ExtractMonth
def planner(request):
    if request.method=="POST":
        task=request.POST.get('task')
        date=request.POST.get('date')
        tododata=plannerdt(task=task,date=date)
        tododata.save()
    plannerdata = plannerdt.objects.annotate(
        month=ExtractMonth('date')
    ).order_by('month', 'date')
    plndata={
        'plannerdata':plannerdata,
    }
    return render(request,"planner.html",plndata)
def delete_plan(request,id):
    form= plannerdt.objects.get(id=id)
    form.delete()
    return redirect( 'planner')
# Create your views here.
