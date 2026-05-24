from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import EmissionRecord
from .serializers import EmissionRecordSerializer

@api_view(['GET'])
def emission_list(request):
    emissions = EmissionRecord.objects.all()
    serializer = EmissionRecordSerializer(emissions, many=True)
    return Response(serializer.data)