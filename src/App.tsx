import alumnos from "./data/data";
import squareArea from "./utils/squareArea"
import sumNumbers from "./utils/sumNumbers";
import nuevoArreglo from "./utils/divisionArray";
import Counter from "./components/Counter";
import promedio from "./utils/averageGrade";

function App() {

  const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
          <p>const arreglo = [5,10,15,20,25,30,35,40,45,50] division para 5 es: {JSON.stringify(nuevoArreglo)}</p>
        </div>
        <div>
          <h1>Ejercicio 4:</h1>
          <p> el promedio con los alumnos es: {promedio(alumnos)}</p>
        </div>
        <Counter />
      </div>
    </div>
  )
}

export default App
