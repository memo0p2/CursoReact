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
      />
    )
  }
}

class App extends Component {

  render () {
    return (
      <div>
       <h1>Inputs controlados uwuwuwu</h1>
       <InputControlado></InputControlado>
      </div>
    )
  }
}

export default App