from django.urls import path
from base.views import feeds_views as views

urlpatterns = [
    path('', views.getFeeds, name='feeds'),
    path('feeds/<str:pk>', views.getFeed, name='feed'),
]