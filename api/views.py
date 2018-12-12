from django.shortcuts import render
from rest_framework import generics
from .models import User
from django.http import HttpResponse
from . import Uni_Grader


# Create your views here.
def Grades(request):
  grades = Uni_Grader.get_all_grades_JSON(request.user)
  return HttpResponse(grades)

def CreateUser(request):
  user_name = request.user
  inst_mail = request.mail
  mail_pass = request.pasw
  