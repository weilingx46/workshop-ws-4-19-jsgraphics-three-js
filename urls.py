from django.conf.urls import url, include
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('create/', views.create),
    path('login/', views.login),
    path('update/', views.update),
    path('addTrip/', views.addTrip),
    path('deleteTrip/',views.deleteTrip)
]
