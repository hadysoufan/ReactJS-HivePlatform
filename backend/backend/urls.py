from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('hive/1.0.0/', include('base.urls')),

    path('hive/1.0.0/users/', include('base.urls.users_urls')),
    path('hive/1.0.0/feeds/', include('base.urls.feeds_urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)