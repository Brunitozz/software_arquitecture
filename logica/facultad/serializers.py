from rest_framework import serializers
from .models import TAlumno, TCarreraProfesional

class TCarreraProfesionalSerializers(serializers.ModelSerializer):
    #fecha_ingreso_u = serializers.DateField(format="%d/%m/%Y", input_formats=["%d/%m/%Y", "%Y-%m-%d"])
    class Meta:
        model = TCarreraProfesional
        #fields = ('codigoCP', 'nomCP', 'fecha_creacion', 'observaciones')
        fields = '__all__'

class TAlumnoSerializers(serializers.ModelSerializer):
    #fecha_ingreso_u = serializers.DateField(format="%d/%m/%Y", input_formats=["%d/%m/%Y", "%Y-%m-%d"])
    class Meta:
        model = TAlumno
        fields = '__all__'