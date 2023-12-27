from django.urls import path
from splash import views

urlpatterns = [
    path("", views.home),
]