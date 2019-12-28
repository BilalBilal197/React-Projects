import React from 'react';
import './App.css';
import FrozenDept from './components/FrozenDept';
import MeatDept from './components/MeatDept';
import ProduceDept from './components/ProduceDept';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' component={NavBar} />
        <Route path="/meat-dept" component={MeatDept} />
        <Route path='/frozen-dept' component={FrozenDept} />
        <Route path="/produce-dept" component={ProduceDept} />
      </div>
    </Router>
  );
}

export default App;
