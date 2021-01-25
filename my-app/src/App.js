import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import Typing from 'react-typing-animation';

// Components
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';

// Styling
import './App.css';

function App() {

  return (
    <>
    <div className="logo-whatever">
      <Typing speed={300}>
        <p className="preheader">Hello!</p>
        <Typing.Delay ms={1000} />
        <Typing.Speed ms={50} />
        <h1>
        I'm Vaidehee Patel
        </h1>
        <Typing.Delay ms={800} />
        <p className="subheader">and this is my Portfolio :))</p>
      </Typing>
    </div>
     
        <div className='nav'>
            <Link className="home-link" to='/'>Home</Link>
            <Link className="portfolio-link" to='/portfolio'>Portfolio</Link>
        </div>
      <div>
        <Switch>
          <Route exact path='/'> <Home /> </Route>
          <Route exact path='/portfolio'> <Portfolio /> </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;