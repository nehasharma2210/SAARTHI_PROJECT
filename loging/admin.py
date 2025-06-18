from django.contrib import admin
from loging.models import  *

#loging detail
class log(admin.ModelAdmin):
    list_display=('user_name','password')
admin.site.register(loging,log)

#flash card section
class cards(admin.ModelAdmin):
    list_display=('que','ans')
admin.site.register(flashcard,cards)

#Pomodoro_Timer_data
class Pomodoro(admin.ModelAdmin):
    list_display=('time',)
admin.site.register(Pomodoro_Timer,Pomodoro)

#to contect app admin
class contact_detail(admin.ModelAdmin):
    list_display=('name','contect_email','message')
admin.site.register(contact,contact_detail) 

# for help system 
class help_user(admin.ModelAdmin) :
    list_display=('key','ans') 
admin.site.register(help,help_user)
