from rest_framework import routers
from .api import TCarreraProfesionalViewSet, TAlumnoViewSet
router = routers.DefaultRouter()

router.register('api/carreraprofesional', TCarreraProfesionalViewSet, 'carreraprofesional')
router.register('api/alumno', TAlumnoViewSet, 'alumno')

urlpatterns = router.urls