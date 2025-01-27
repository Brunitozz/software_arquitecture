import React, { useEffect, useState } from 'react';
import { fetchFacultad, fetchAlumno } from '../service/apiService';
import './alumnosTable.css';

const AlumnosTable = () => {
    const [alumnos, setAlumnos] = useState([]);
    const [carreras, setCarreras] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const [alumnosData, carrerasData] = await Promise.all([
                    fetchAlumno(),
                    fetchFacultad(),
                ]);
                setAlumnos(alumnosData);
                setCarreras(carrerasData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    const combinarDatos = () => {
        if (!alumnos.length || !carreras.length) {
            return [];
        }
        return alumnos.map((alumno) => {
            const carrera = carreras.find((c) => c.codigoCP === alumno.codigoCP);
            return {
                ...alumno,
                nomCP: carrera ? carrera.nomCP : 'Carrera no encontrada',
            };
        });
    };

    const contarAlumnosPorCarrera = (alumnosCombinados) => {
        return alumnosCombinados.reduce((conteo, alumno) => {
            const carrera = alumno.nomCP;
            conteo[carrera] = (conteo[carrera] || 0) + 1;
            return conteo;
        }, {});
    };

    const filtrarAlumnos = (alumnosCombinados) => {
        return alumnosCombinados.filter((alumno) => {
            const fechaIngreso = new Date(alumno.fecha_ingreso_u);
            const fechaLimite = new Date('2021-01-01');
            const edad = alumno.edad;
            const colorFavorito = alumno.color;

            return (
                fechaIngreso > fechaLimite &&
                colorFavorito.toLowerCase() !== 'rojo' &&
                edad >= 18 &&
                edad <= 25
            );
        });
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const alumnosCombinados = combinarDatos();
    const conteoPorCarrera = contarAlumnosPorCarrera(alumnosCombinados);
    const alumnosFiltrados = filtrarAlumnos(alumnosCombinados);

    return (
        <div className='container'>
            <h2>Número de Alumnos por Carrera Profesional</h2>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th scope="col">Carrera Profesional</th>
                        <th scope="col">Número de Alumnos</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(conteoPorCarrera).map(([carrera, cantidad]) => (
                        <tr key={carrera}>
                            <td>{carrera}</td>
                            <td>{cantidad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Alumnos Filtrados</h2>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Carrera Profesional</th>
                        <th scope="col">Fecha de Ingreso</th>
                        <th scope="col">Color Favorito</th>
                        <th scope="col">Edad</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnosFiltrados.map((alumno) => (
                        <tr key={alumno.codigo_alumno}>
                            <td>{alumno.nom}</td>
                            <td>{alumno.apellido}</td>
                            <td>{alumno.nomCP}</td>
                            <td>{alumno.fecha_ingreso_u}</td>
                            <td>{alumno.color}</td>
                            <td>{alumno.edad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AlumnosTable;