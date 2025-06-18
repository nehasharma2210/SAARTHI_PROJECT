from django.shortcuts import render,redirect

#chatbot section

def chatbot(request):
    return render(request,"chatbot.html")

#  calculator section
def calculator(request):
    
    return render(request,'calculator.html')




