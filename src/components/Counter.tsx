import React, { useState } from 'react'


const Counter = () => {

  const [acumulador, setAcumulador] = useState<number>(0);

  return (
    <div>
      <h1>Ejercicio 5:</h1>
      <p>{acumulador}</p>
      <button onClick={() => setAcumulador(acumulador + 5)}>+5</button>
      <button onClick={() => acumulador === 0 ? null : setAcumulador(acumulador - 5)}>-5</button>
    </div>
  )
}

export default Counter
