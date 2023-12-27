from django.urls import path
from app import views

urlpatterns = [
    path("app/", views.home),
    path("app/<fileName>", views.home),
    # path("app/<name>", views.hello_there, name="hello_there"),
]