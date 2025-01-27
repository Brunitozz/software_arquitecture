from django.contrib import admin
from .models import TAlumno,TCarreraProfesional

admin.site.site_header= 'Arquitectura de 4 capas'
admin.site.site_title = 'Facultad y Alumnos'

admin.site.register(TCarreraProfesional)
admin.site.register(TAlumno)