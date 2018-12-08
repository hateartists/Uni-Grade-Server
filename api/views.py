from django.shortcuts import render
from rest_framework import generics
from .models import User
from django.http import HttpResponse
from . import Uni_Grader


# Create your views here.
def Grades(request):
  USER_NAME =  request.user
  data = User.objects.filter(user=USER_NAME)
  grades = Uni_Grader.get_all('a216201439@unison.mx', 'ValveTime1938')
  return HttpResponse(grades)