import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const Hola = () => (
  <h1>Hola</h1>
)

const HolaNinja = () => (
  <h1>Hola ninja</h1>
)

const Productos = () => (
  <h1>Productos</h1>
)

const Home = () => (
  <h1>Home</h1>
)
const App = () => {
  return (
    <BrowserRouter>
      <Route
        path='/'
        exact
        component={Home}
      />
      <Route
        path='/hola'
        exact
        component={Hola}
      />
      <Route
        path='/hola/ninja'
        component={HolaNinja}
      />
      <Route
        path='/productos'
        component={Productos}
      />
      
    </BrowserRouter>
  )
}

export default App