from django.contrib import admin
from attendance.models import attendances
class data(admin.ModelAdmin):
    list_display=('sub','tcls','pcls')
admin.site.register(attendances,data)
# Register your models here.
