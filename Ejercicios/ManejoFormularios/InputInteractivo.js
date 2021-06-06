import React, { Component } from 'react'

class InputControlado extends Component {
  state = {
    text: '',
    color: '#E8E8E8'
  }

  actualizar = (event) => {
    const text = event.target.value
    let color = 'green'

    if (text.trim() === '') {
      color = '#E8E8E8'
    }

    if (text.trim() !== '' && text.length < 5) {
      color = 'red'
    }

    this.setState({ text, color })
    this.props.onChange(this.props.name,text)
  }

  render () {
    const styles = {
      border: `10px solid ${this.state.color}`,
      padding: '0.3em 0.6em',
      outline: 'none'
    }
    return (
      <input
        type='text'
        value={this.state.text}
        onChange={this.actualizar}
        style={styles}
        placeholder={this.props.placeholder}
      />
    )
  }
}

class App extends Component {
  state={
    name:'',
    email:''
  }
  actualizar=(name,text)=>{
    this.setState({
      [name]:text
    })
  }
  render () {
    return (
      <div>
       <h1>Inputs controlados uwuwuwu</h1>
       <InputControlado
        onChange={this.actualizar}
        name='name'
        placeholder='Nombre completo'
       ></InputControlado>
       <br></br>
       <InputControlado
        onChange={this.actualizar}
        name="email"
        placeholder='Email'
       ></InputControlado>
       <h2>Nombre: {this.state.name}</h2>
       <h2>Email: {this.state.email}</h2>
      </div>
    )
  }
}

export default App