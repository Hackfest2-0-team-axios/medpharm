from django.contrib import admin
from .models import Jwt,CustomUser
# Register your models here.
admin.site.register((CustomUser,Jwt))