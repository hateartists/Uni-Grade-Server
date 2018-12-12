from django.urls import path
from . import views


urlpatterns = [
    path('grades/', views.Grades),
    path('register/', views.CreateUser)
]