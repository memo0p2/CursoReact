import React, { Component } from 'react'
import './global.css'

class Hijo extends Component {

  clickManejador = () =>{
    this.props.onSaluda("uwuwuwwuwuw")
  }

  render(){
    return(
      <div className= 'box blue'>
        <h2>Hijo</h2>
        <button onClick={this.clickManejador}>Saluda</button>
      </div>
    )
  }
}

class App extends Component {

  state={
    name: ''
  }

  manejador = (name) =>{
    this.setState({name:name})
  }

  render () {
    return (
      <div className= 'box red'>
        <Hijo onSaluda={this.manejador}></Hijo>
        <h1>Mensaje: {this.state.name}</h1>
      </div>
    )
  }
}

export default App
