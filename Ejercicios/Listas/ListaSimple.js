import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const frutas=["fresa","manzana","sandia","kiwi","durazno","mango","piña"]
    
class App extends Component {

  render () {
    return (
      <div>
        <ul>
          {frutas.map((frutas)=>{
            return (
              <li>
                {frutas}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App