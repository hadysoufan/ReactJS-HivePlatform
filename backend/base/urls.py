from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('feeds/', views.getFeeds, name='feeds'),
    path('feeds/<str:pk>', views.getFeed, name='feed'),
]