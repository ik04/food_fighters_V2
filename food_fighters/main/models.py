from django.db import models

# Create your models here.
class Ask(models.Model):
    ingredients = models.IntegerField()
    disease = models.IntegerField()
   