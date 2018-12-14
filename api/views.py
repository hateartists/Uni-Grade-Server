from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .models import User
from django.http import JsonResponse
from . import Uni_Grader
import json


# Create your views here.
def Grades(request):
  grades = Uni_Grader.get_all_grades_JSON(request.GET.get('user'))
  return JsonResponse(grades, safe=False)

@csrf_exempt 
def CreateUser(request):
  if request.method == 'POST':
    data = json.loads(request.body)
    user_name = data.get('user')
    print(user_name)
    inst_mail = data.get('mail')
    print(inst_mail)
    mail_pass = data.get('pasw')
    print(mail_pass)
    grades = Uni_Grader.get_all_id(user_name, inst_mail, mail_pass)
    return JsonResponse(grades, safe=False)  
  else:
    return 'Not posting'