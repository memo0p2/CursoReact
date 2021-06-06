import React, { Component } from 'react'

const FancyIn = React.forwardRef((props,ref) => (
  <div>
    <input type="text" ref={ref}></input>
  </div>
))

class App extends Component {
  entrada=React.createRef()
  componentDidMount(){
    console.log(this.entrada)
  }

  render () {

    return (
      <div>
        <FancyIn ref={this.entrada} />
      </div>
    )
  }
}

export default App