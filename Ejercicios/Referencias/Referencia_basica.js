import React, { Component, createRef } from 'react'

class Entrada extends Component{
  entrada=React.createRef()

  componentDidMount(){
    this.focus()
  }

  focus=()=>{
    this.entrada.current.focus()
  }
  
  blur=()=>{
    this.entrada.current.blur()
  }

  
  render(){
    return(
      <div>
        <input type="text" ref={this.entrada}/>
        <button onClick={this.focus}>Focus</button>
        <button onClick={this.blur}>Blur</button>
      </div>
    )
  }
}

class App extends Component {

  render () {
    return (
      <div>
        <h1>
          React memito
        </h1>
        <Entrada></Entrada>
      </div>
    )
  }
}

export default App