from django.db import models

class LogEvent(models.Model):
    timestamp = models.CharField(max_length=100)
    computer_name = models.CharField(max_length=100)
    event_type = models.CharField(max_length=50)
    application = models.CharField(max_length=100)
    window_title = models.CharField(max_length=100)
    content = models.TextField()
    screenshot_url = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.timestamp} - {self.event_type}"
