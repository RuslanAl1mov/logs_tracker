
from django.db import models

class LogEvent(models.Model):
    timestamp = models.DateTimeField()
    computer_name = models.CharField(max_length=255)
    event_type = models.CharField(max_length=255)
    application = models.CharField(max_length=255)
    window_title = models.CharField(max_length=255)
    content = models.TextField()
    screenshot = models.ImageField(upload_to='screenshots/')

    def __str__(self):
        return f"{self.timestamp} - {self.event_type}"
