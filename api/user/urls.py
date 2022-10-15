from django.urls import path, include
from .views import LoginView,SignUpView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('login',LoginView.as_view(),name = 'login'),      
    path('signup',SignUpView.as_view(),name = 'signup'),
]