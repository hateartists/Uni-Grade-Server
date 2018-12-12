from django.shortcuts import render
from rest_framework import generics
from .models import User
from django.http import HttpResponse
from . import Uni_Grader


# Create your views here.
def Grades(request):
  Uni_Grader.get_all_id('emilews', 'a216201439@unison.mx', 'ValveTime1938')
  grades = Uni_Grader.get_all_grades_JSON('emilews')
  return HttpResponse(grades)

def CreateUser(request):
  user_name = request.user
  inst_mail = request.mail 
  mail_pass = request.pasw
  