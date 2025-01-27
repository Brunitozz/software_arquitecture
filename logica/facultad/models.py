from django.db import models

# Create your models here.
class TCarreraProfesional(models.Model):
    codigoCP = models.IntegerField(primary_key=True)
    nomCP = models.CharField(max_length=255)
    fecha_creacion = models.DateField()
    observaciones = models.TextField()

    def __str__(self):
        return self.nomCP
    
class TAlumno(models.Model):
    codigo_alumno = models.IntegerField(primary_key=True)
    apellido = models.CharField(max_length=100)
    nom = models.CharField(max_length=50)
    edad = models.IntegerField()
    sexo = models.CharField(max_length=1)
    peso = models.IntegerField()
    talla = models.FloatField()
    color = models.CharField(max_length=15)
    prov = models.CharField(max_length=25)
    codigoCP = models.ForeignKey(TCarreraProfesional, on_delete=models.CASCADE)
    fecha_ingreso_u = models.DateField()

    def __str__(self):
        return f"{self.nom}, {self.apellido}"


