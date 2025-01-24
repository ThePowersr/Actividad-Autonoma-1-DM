import { useState } from "react";
import alumnos from "./data/data";
import { Alumno } from "./data/data.interface";
import squareArea from "./utils/squareArea"

function App() {

  const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const sumNumbers = (array: number[]) => {
    return array.reduce((acc, value) => acc + value, 0);
  };

  const arreglo: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

  const nuevoArreglo: number[] = [];

  arreglo.map(numero => {
    if (numero === 5) {
      return
    }
    nuevoArreglo.push(numero / 5);
    console.log('Hola mundo');
  })

  const promedio = (arreglo: Alumno[]) => {
    let promedio = 0;
    const totalAlumnos = arreglo.length;
    arreglo.map(alumno => {
      promedio += alumno.calificacion;
    });
    return promedio / totalAlumnos;
  }

  const [acumulador, setAcumulador] = useState<number>(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <div>
          <h1>Ejercicio 1:</h1>
          <p> Area del cuadrado con longitud de 12cm = {squareArea(12)}</p>
        </div>
        <div>
          <h1>Ejercicio 2:</h1>
          <p> la suma de este arreglo; [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] es:  {sumNumbers(arrayNumber)}</p>
        </div>
        <div>
          <h1>Ejercicio 3:</h1>
          <p> onst arreglo = [5,10,15,20,25,30,35,40,45,50] divison para 5 es: {JSON.stringify(nuevoArreglo)}</p>
        </div>
        <div>
          <h1>Ejercicio 4:</h1>
          <p> el promedio con los alumnos es: {promedio(alumnos)}</p>
        </div>
        <div>
          <h1>Ejercicio 5:</h1>
          <p>{acumulador}</p>
          <button onClick={() => setAcumulador(acumulador + 5)}>+5</button>
          <button onClick={() => acumulador === 0 ? null : setAcumulador(acumulador - 5)}>-5</button>
        </div>
      </div>
    </div>
  )
}

export default App
