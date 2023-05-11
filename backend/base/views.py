from rest_framework.decorators import api_view
from rest_framework.response import Response
from .users import users


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products',
        'api/products/create',
    ]
    return Response(routes)

@api_view(['GET'])
def getUsers(request):
    return Response(users)

@api_view(['GET'])
def getUser(request, pk):
    for i in users:
        if i['_id'] == pk:
          user = i
          break
    return Response(user)