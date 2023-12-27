from django.shortcuts import render
import re
from django.utils.timezone import datetime
from django.http import HttpResponse
#import header and footer

def home(request):
    return render(
        request, 'app/home.html'
    )

def showPhoto(request, fileName):
    return render(
        request, 'app/home.html', {
            'fileName': fileName,
        }
    )
