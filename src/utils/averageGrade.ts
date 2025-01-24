import { Alumno } from "../data/data.interface";

const promedio = (arreglo: Alumno[]) => {
  let promedio = 0;
  const totalAlumnos = arreglo.length;
  arreglo.map(alumno => {
    promedio += alumno.calificacion;
  });
  return promedio / totalAlumnos;
}

export default promedio;