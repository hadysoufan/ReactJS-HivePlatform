from django.urls import path
from . import views

urlpatterns = [
    path('feeds/', views.getFeeds, name='feeds'),
    path('feeds/<str:pk>', views.getFeed, name='feed'),
]