from django.urls import path
from . import views


urlpatterns = [
    path('', views.getRoutes, name='routes'),

    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/user-profile/', views.getUserProfile, name='user-profile'),

    path('feeds/', views.getFeeds, name='feeds'),
    path('feeds/<str:pk>', views.getFeed, name='feed'),
]