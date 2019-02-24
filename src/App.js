import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
  render() {
    const divStyle = {
      textAlign : 'center',      
    }
    return (
      <div className="App" style={ divStyle }>
        <h1>hello world!</h1>
        <Car name={'Ford'} year={2018}>
          <p style={{color: 'red'}}>BAD CAR</p>
        </Car>
        <Car name={'Audi'} year={2015}>
          <p style={{color: 'green'}}>GOOD CAR</p>
        </Car>
        <Car name='Mazda' year={2005}/>
        
      </div>
      
    );
  }
}

export default App;
