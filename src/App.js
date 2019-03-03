import React, {Component} from 'react'
import './App.sass'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail';

class App extends Component {

  state = {
    isLogged: false,
  }

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
        <div style={{textAlign: "center"}}>
          <h3>Is logged in: {this.state.isLogged.toString()}</h3>
          <button onClick={() => this.setState({isLogged: !this.state.isLogged})}>
            {this.state.isLogged ? 'Logout' : 'Login'}
          </button>
        </div>
          
        <hr/>
        <Switch>   
          {this.state.isLogged 
            ? <Route 
              path={ '/about' } 
              component={About}
            />
            : null
          }
          <Route 
            path={ '/cars/:name' } 
            component={CarDetail}
          />
          <Route 
            path={ '/cars' } 
            component={Cars}
          />      
           <Route 
            path={ '/' } exact
            render={() => <h1>Home page</h1> }
          />
          <Redirect to={'/'} />
          {/* <Route
            render={() => <h1 style={{textAlign: "center", color: 'red'}}>Wrong Page</h1>}
          /> */}
        </Switch>
        
      </div>
    );
  }
}

export default App
