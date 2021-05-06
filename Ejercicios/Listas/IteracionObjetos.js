import React, { Component } from 'react'
import ReactDOM from 'react-dom'
    
class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: 'camisa unicornio',
        colors: [ '#467367', '#05fd88', '#a706ee' ],
        price: 20
      },
      {
        id: 2,
        name: 'jeans',
        colors: [ '#D35EFF', '#9956E8', '#876BFF', '#5662E8', '#5E96FF' ],
        price: 32
      },
      {
        id: 3,
        name: 'taza',
        colors: [ '#804342', '#FFD2D1', '#FF8785', '#806969' ],
        price: 20
      },
      {
        id: 4,
        name: 'camisa icream',
        colors: [ '#2544B3', '#FF8A69', '#5076FF', '#7FCC2B', '#73B32E' ],
        price: 20
      },
      {
        id: 5,
        name: 'camisa dragon',
        colors: [ '#B32542', '#FF6987', '#FF4F73', '#14B32E', '#5EFF78' ],
        price: 20
      }
    ]
  }
  render () {
    return (
      <div>
        <h1>Iterando listas de objetos</h1>
        <div>
          {this.state.products.map((products)=>{
            return (
              <div>
                ${products.price}-{products.name}
                <div>
                  {products.colors.map((colors)=>{
                    return(
                      <span
                        style={{
                          width: '13px',
                          height: '13px',
                          borderRadius: '0.1em',
                          border: '1px solid gray',
                          display: 'inline-block',
                          margin: '0.1em',
                          background: colors
                        }}
                      ></span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App