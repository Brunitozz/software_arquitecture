const API_BASE_URL = "http://127.0.0.1:8000/api";

export const fetchAlumno = async () => {
    const response = await fetch(`${API_BASE_URL}/alumno/`);
    if (!response.ok) {
        throw new Error("La conexión falló");
    }
    return await response.json();
};

export const fetchFacultad = async () => {
    const response = await fetch(`${API_BASE_URL}/carreraprofesional/`);
    if (!response.ok) {
        throw new Error("La conexión falló");
    }
    return await response.json();
};
