from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import LogEvent
from .serializers import LogEventSerializer


class LogEventList(generics.ListCreateAPIView):
    queryset = LogEvent.objects.all()
    serializer_class = LogEventSerializer

class LogEventDetail(generics.RetrieveAPIView):
    queryset = LogEvent.objects.all()
    serializer_class = LogEventSerializer


@api_view(['POST'])
def upload_screenshot(request):
    if request.method == 'POST':
        # Извлечение данных из request.data
        timestamp = request.data.get('timestamp', [None])
        computer_name = request.data.get('computer_name', [None])
        event_type = request.data.get('event_type', [None])
        application = request.data.get('application', [None])
        window_title = request.data.get('window_title', [None])
        content = request.data.get('content', [None])
        screenshot = request.FILES.get('screenshot')

        # Создание данных для сериализатора
        log_data = {
            'timestamp': timestamp,
            'computer_name': computer_name,
            'event_type': event_type,
            'application': application,
            'window_title': window_title,
            'content': content,
            'screenshot': screenshot,  # Передаем файл как есть
        }

        # Печатаем данные для отладки
        print("Полученные данные:", log_data)

        # Сериализация данных
        serializer = LogEventSerializer(data=log_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
