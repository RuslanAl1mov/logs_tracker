from django.urls import path
from .views import LogEventList, LogEventDetail

urlpatterns = [
    path('logs/', LogEventList.as_view(), name='log-list'),
    path('logs/<int:pk>/', LogEventDetail.as_view(), name='log-detail'),
]