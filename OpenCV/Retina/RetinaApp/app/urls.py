from django.urls import path
from app import views
from .views import FileUploadView

urlpatterns = [
    # path("", views.home),
    # path("app/<fileName>", views.home),
    # path("app/<name>", views.hello_there, name="hello_there"),
    path('uploads/', FileUploadView.as_view(), name="product_upload")
]