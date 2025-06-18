from django.shortcuts import render,redirect
from expense.models import expenses
from datetime import datetime
from django.db.models.functions import ExtractMonth
# Create your views here.
def expense(request):
    this_month = datetime.now().month
    if request.method=="GET":
        selected = request.GET.get('month')
        if selected and selected.isdigit():
            this_month = int(selected)

    if request.method=="POST":
        des=request.POST.get('expenseDesc')
        amount=int(request.POST.get('expenseAmount'))
        date=request.POST.get('expenseDate')
        add=expenses(des=des,amount=amount,date=date)
        add.save()
    expensedata = expenses.objects.annotate(month=ExtractMonth('date')).filter(month=this_month)
    total = sum(ex.amount for ex in expensedata)
    return render(request, "expense.html", {
        'expensedata': expensedata,
        'totalamount': total
    })

# delete data from expense section 
def delete_expense(request,id):
    form=  expenses.objects.get(id=id)
    form.delete()
    return redirect('expense')



