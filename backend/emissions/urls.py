from django.urls import path
from .views import emission_list

urlpatterns = [
    path('', emission_list),
]