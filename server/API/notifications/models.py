from django.db import models
from uuid import uuid4


class Alert(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    title = models.CharField(max_length=200)
    url = models.TextField()
    count = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Title: {self.title}, Url: {self.url}"


# TODO: Integrate user foreign key
# EXAMPLE:
# user = models.ForeignKey(User, on_delete=models.CASCADE)
# from django.contrib.auth.models import User
