from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    host = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    image = models.ImageField(upload_to='post-image/', blank=True, null=True)
    description = models.CharField(max_length=200, null=True, blank=True)
    participants = models.ManyToManyField(
        User, related_name='participants', blank=True)
    update = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-update', '-created']

    def __str__(self):
        return str(self.host)