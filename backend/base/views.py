from rest_framework.decorators import api_view
from rest_framework.response import Response

from .feeds import feeds
from .models import Post
from .serializers import PostSerializer


@api_view(['GET'])
def getFeeds(request):
    feeds = Post.objects.all()
    serializer = PostSerializer(feeds, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getFeed(request, pk):
    for i in feeds:
        if i['_id'] == pk:
          feed = i
          break
    return Response(feed)