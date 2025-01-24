const arreglo: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const nuevoArreglo: number[] = [];

arreglo.map(numero => {
  if (numero === 5) {
    return
  }
  nuevoArreglo.push(numero / 5);
})

export default nuevoArreglo;