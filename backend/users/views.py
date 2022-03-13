from django.contrib.auth import login, logout
from django.middleware.csrf import get_token

from rest_framework import status, views
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

from .serializers import UserSerializer, LoginSerializer

# Create your views here.
class LoginView(views.APIView):
    permission_classes = (AllowAny,)
    authentication_classes = (SessionAuthentication,)

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        serializer = UserSerializer(user)
        data = serializer.data
        upd_data = dict(data)
        upd_data['csrftoken'] = get_token(request)
        print(upd_data)
        return Response(upd_data)

@api_view(['POST'])
@authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def logout_view(request, *args, **kwargs):
    """
    Frontend view for logging user out.
    """
    if request.user is not None:
        logout(request)
        context = {'detail' : 'Sucessfully logged out.'}
        return Response(context, status=status.HTTP_200_OK)
    context = {'detail': 'Action not allowed.'}
    return Response(context, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_current_user(request, *args, **kwargs):
    """
    Returns user's username and generate a new csrftoken.
    username will be blank if user is not authenticated.
    """
    context = {
        'username': request.user.get_username(),
        'id': request.user.id,
        'csrftoken': get_token(request)
    }
    return Response(context, status.HTTP_200_OK)
