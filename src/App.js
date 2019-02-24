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
        <Car name={'Ford'} year={2018}/>
        <Car name={'Audi'} year={2015}/>
        <Car name='Mazda' year={2005}/>
        
      </div>
      
    );
    // return React.createElement(
    //   'div',
    //   {
    //     className: 'App',
    //   },
    //   React.createElement(
    //     'h1',
    //     null,
    //     'hello world'
    //   )
    // )
  }
}

export default App;
