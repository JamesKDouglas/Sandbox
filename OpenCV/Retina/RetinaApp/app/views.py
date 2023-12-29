from django.shortcuts import render
# import re
# from django.utils.timezone import datetime
# from django.http import HttpResponse
# import header and footer
from django.views.generic.edit import FormView
from django.shortcuts import render
from .forms import UploadForm
from .models import FileUpload

from django.views.generic import ListView
from django.utils import timezone
from datetime import time
from django.views.generic.dates import timezone_today

class FileListView(ListView):
    template_name="app/list.html"
    model = FileUpload
    paginate_by = 100

    def get_context_data(self, **kwargs):
        context=super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context
        
class FileUploadView(FormView):
    form_class = UploadForm
    template_name = 'app/home.html'
    success_url = "app/processed.html"

    def get(self, request, *args, **kwargs):
        form = self.form_class()
        return render(request, self.template_name, {'form':form})

    def post(self, request, *arg, **kwargs):
        print(request);
        form = self.form_class(
            data=request.POST,
            files=request.FILES
        )

        if form.is_valid():
            form.save()

        return render(request, self.template_name, {'form':form})

# def home(request):
#     return render(
#         request, 'app/home.html'
#     )

# def showPhoto(request, fileName):
#     return render(
#         request, 'app/home.html', {
#             'fileName': fileName,
#         }
#     )
