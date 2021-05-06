import React, { Component } from 'react'
const Gato = (props)=>(
  <div>
    <h1>Gato</h1>
    <pre>
      {
        JSON.stringify(props,null,4)
      }
    </pre>
  </div>
)
const otrosDatos={
    raza:'mixta',
    peleas:300
}
const App = () => (
  <div>
    <Gato 
      name='paco'
      age='2'
      {...otrosDatos}
    />
  </div>
)

export default App
