from .models import TAlumno, TCarreraProfesional
from rest_framework import viewsets, permissions
from .serializers import TCarreraProfesionalSerializers, TAlumnoSerializers

class TCarreraProfesionalViewSet(viewsets.ModelViewSet):
    queryset = TCarreraProfesional.objects.all()
    permission_classes = [permissions.AllowAny] 
    serializer_class = TCarreraProfesionalSerializers

class TAlumnoViewSet(viewsets.ModelViewSet):
    queryset = TAlumno.objects.all()
    ppermission_classes = [permissions.AllowAny]
    serializer_class =TAlumnoSerializers