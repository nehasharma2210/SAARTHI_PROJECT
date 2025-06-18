from django.contrib import admin
from planner.models import plannerdt
class todo(admin.ModelAdmin):
    list_display=['task','date']
admin.site.register(plannerdt,todo)

# Register your models here.
