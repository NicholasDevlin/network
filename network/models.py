from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass

class Posts(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE, related_name="post")
    content = models.CharField(max_length=1000)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Post {self.id} from {self.user} at {self.date.strftime('%d %b %y %H:%M')}"