import jwt
from .models import Jwt
from .models import CustomUser
from datetime import datetime, timedelta
from django.conf import settings
import random
from rest_framework import generics
import string
from rest_framework.views import APIView
from .serializers import LoginSerializer,SignUpSerializer
from django.contrib.auth import authenticate
from rest_framework.response import Response
# from .authentication import Authentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from .utils import Util
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str,force_str,smart_bytes,DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_encode,urlsafe_base64_decode
from rest_framework_simplejwt.tokens import RefreshToken


def get_random(length):
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=length ))

def get_access_token(payload):
    return jwt.encode(
        {'exp':datetime.now() + timedelta(minutes= 5),**payload},
        settings.SECRET_KEY,
        algorithm = 'HS256'
    )


def get_refresh_token():
    return jwt.encode(
        {'exp':datetime.now() + timedelta(days= 365),'data':get_random(10)},
        settings.SECRET_KEY,
        algorithm = 'HS256'
    )

# def get_referral_code():
#     pass


class LoginView(APIView):
    serializer_class = LoginSerializer
    def post(self,request):
        serializer = self.serializer_class(data = request.data)
        serializer.is_valid(raise_exception = True)

        return Response(serializer.data,status = 200)

class SignUpView(APIView):
    serializer_class = SignUpSerializer

    def post(self,request):
        
        serializer = self.serializer_class(data = request.data)
        serializer.is_valid(raise_exception = True)

        CustomUser.objects._create_user(**serializer.validated_data)
        user_data = serializer.data
        user = CustomUser.objects.get(email = user_data['email'])
        token = RefreshToken.for_user(user).access_token
        current_site = get_current_site(request).domain
        relativeLink = reverse('email-verify')
        absurl = 'http//'+current_site+relativeLink+'?token='+str(token)
        email_body = 'Hi'+user.email+'Use link below to verify your email'+absurl
        data = {'email_body':email_body,'to_email':user.email, 'email_subject':'Verify your email'}
        Util.send_email(data)
        return Response({'success':'User created'},status= 201)