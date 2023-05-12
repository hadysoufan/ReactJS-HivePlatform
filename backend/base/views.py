from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Post
from .serializers import PostSerializer


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