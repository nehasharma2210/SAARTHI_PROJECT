from django.db import models
class attendances(models.Model):
    sub=models.CharField(max_length=50)
    tcls=models.IntegerField(default=0)
    pcls=models.IntegerField(default=0)
 
    def __str__(self):
        return self.sub
    @property
    def Absentclass(self):
        acls=self.tcls-self.pcls
        return acls
    @property
    def persent(self):
        if(self.tcls>0):
            per=float(self.pcls*100/self.tcls)
        else:
            per=0
        return format(per, '.2f')
# Create your models here.
