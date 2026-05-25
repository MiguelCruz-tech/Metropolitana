import { TablaAlumno } from "../models/alumno.model.js"

TablaAlumno.create({
    alumno: "Juan",
    calificacion: 85,
    materia: "Matematicas"
})

TablaAlumno.create({
    alumno: "Maria",
    calificacion: 90,
    materia: "Español"
})

TablaAlumno.create({
    alumno: "Pedro",
    calificacion: 78,
    materia: "Ciencias"
})

TablaAlumno.create({
    alumno: "Luisa",
    calificacion: 92,
    materia: "Historia"
})

export const test = () => console.log("Si se esta llamando correctamente al controlador")