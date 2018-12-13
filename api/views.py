from django.shortcuts import render
from rest_framework import generics
from .models import User
from django.http import JsonResponse
from . import Uni_Grader


# Create your views here.
def Grades(request):
  grades = Uni_Grader.get_all_grades_JSON(request.GET.get('user'))
  return JsonResponse(grades, safe=False)

def CreateUser(request):
  user_name = request.POST.get('user')
  inst_mail = request.POST.get('mail')
  mail_pass = request.POST.get('pasw')
  grades = Uni_Grader.get_all_id(user_name, inst_mail, mail_pass)
  return JsonResponse(grades, safe=False)  