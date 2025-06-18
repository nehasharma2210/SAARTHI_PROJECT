from django.contrib import admin
from django.urls import path
from saarthi import views
from planner.views import *
from expense.views import *
from attendance.views import *
from loging.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',home ,name="home"),
    path('chatbot/',views.chatbot,name="chatbot"),

    #planner section urls
    path('planner/',planner,name="planner"),
    path('delete_plan/<int:id>/',delete_plan, name='delete_plan'),

    #expense urls
    path('expense/',expense,name="expense"),
    path('delete_expense/<int:id>/',delete_expense, name='delete_expense'),

    #attendance section urls
    path('attendanceadd/',attendanceadd,name="attendanceadd"),
    path('attendance/', attendance,name="attendance"),
    path('delete/<int:id>/', delete_item, name='delete'),
    path('add_present/<int:id>/', add_present, name='add_present'),
    path('add_absent/<int:id>/', add_absent, name='add_absent'),
    # path('expense/',views.addexpense,name="expense"),

    #loging
    path('loging/',log,name="loging"),
    path('logout/',logout,name="logout"),
    
    #calculator
    path('calculator/',views.calculator,name="calculator"),
    
]
