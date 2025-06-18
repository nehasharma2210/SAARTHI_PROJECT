from django.contrib import admin
from expense.models import expenses
class expense(admin.ModelAdmin):
    list_display=('des','amount','date')
admin.site.register(expenses,expense)
# Register your models here.
