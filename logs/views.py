from rest_framework import generics
from .models import LogEvent
from .serializers import LogEventSerializer

class LogEventList(generics.ListCreateAPIView):
    queryset = LogEvent.objects.all()
    serializer_class = LogEventSerializer

class LogEventDetail(generics.RetrieveAPIView):
    queryset = LogEvent.objects.all()
    serializer_class = LogEventSerializer
