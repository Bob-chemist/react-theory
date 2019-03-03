import React, {Component} from 'react'
import './App.sass'
import { Route, NavLink, Switch } from 'react-router-dom';
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail';

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink 
                to="/" exact 
                activeClassName={'wtf'}
                activeStyle={{color: 'blue'}}
              >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: '/cars',
              }}>Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>
        <Switch>         
          <Route 
            path={ '/about' } 
            component={About}
          />
          <Route 
            path={ '/cars/:name' } 
            component={CarDetail}
          />
          <Route 
            path={ '/cars' } 
            component={Cars}
          />      
           <Route 
            path={ '/' }
            render={() => <h1>Home page</h1> }
          />    
        </Switch>
        
      </div>
    );
  }
}

export default App
