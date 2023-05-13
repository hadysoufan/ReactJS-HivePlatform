from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Post
from .serializers import PostSerializer

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        data['username'] = self.user.username
        data['email'] = self.user.email

        return data    
        
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer    

@api_view(['GET'])
def getRoutes(reqeust):
    routes = [
        'hive/1.0.0/feeds',
        'hive/1.0.0/feeds/<str:pk>',
    ]
    return Response(routes)

@api_view(['GET'])
def getFeeds(request):
    feeds = Post.objects.all()
    serializer = PostSerializer(feeds, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getFeed(request, pk):
    feed = Post.objects.get(_id=pk)
    serializer = PostSerializer(feed,many=False)
    return Response(serializer.data)