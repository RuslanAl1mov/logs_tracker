from django.urls import path
from .views import *


urlpatterns = [
    path('logs/', LogEventList.as_view(), name='log-list'),
    path('logs/<int:pk>/', LogEventDetail.as_view(), name='log-detail'),
    path('upload/', upload_screenshot, name='upload_screenshot'),
]

