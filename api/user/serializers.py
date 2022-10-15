from asyncore import write
from rest_framework import serializers
from .models import CustomUser
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str,force_str,smart_bytes,DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_encode,urlsafe_base64_decode
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from .utils import Util
from django.contrib import auth

class SignUpSerializer(serializers.Serializer):
    email = serializers.EmailField(min_length = 3)
    first_name = serializers.CharField(max_length=15)
    last_name = serializers.CharField(max_length=15)
    password = serializers.CharField(min_length = 8)

class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(min_length = 3)
    password = serializers.CharField(min_length = 8,write_only = True)
    tokens = serializers.CharField(read_only = True)

    class Meta:
        model = CustomUser
        fields = ['email','password','tokens']

    def validate(self,attrs):
        email = attrs.get('email','')
        password = attrs.get('password','')

        user=  auth.authenticate(
            email = email,
            password=password
        )

        if not user:
            raise AuthenticationFailed('Invalid credentials try again')
        if not user.is_active:
            raise AuthenticationFailed('Account disabled contact admin')
        if not user.email_verified:
            raise AuthenticationFailed('Email is not verified')

        return {
            'email':user.email,
            'tokens':user.tokens
        }