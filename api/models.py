from django.db import models

# Create your models here.
class User(models.Model):
  username = models.CharField(primary_key = True, max_length=30, null=False)
  student_id = models.IntegerField()
  cycle_id = models.IntegerField()