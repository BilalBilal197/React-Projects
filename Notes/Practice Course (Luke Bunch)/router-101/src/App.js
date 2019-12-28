import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Home';
import Help from './Help';

// const Home = () => <h1>Home</h1>
const Host = () => <h1>Host</h1>
// const Help = () => <h1>Help</h1>
const Login = () => <h1>Login</h1>
const Signin = () => <h1>Sign in</h1>

function App() {
  // route is similar to rendering the whole component like <Home />
  /* <Route path="/" component={Home} />  non-exact path will put Home always at top so use exact path as shown below*/
  
  /* <Route exact path="/" component={Home} /> 
  <Route exact path="/host" component={Host} /> 
  <Route exact path="/help" component={Help} /> 
  <Route exact path="/login" component={Login} /> 
  <Route exact path="/signin" component={Signin} />  */

  return (
    <Router>
      <Route path='/' component={NavBar}/>
      <Route exact path="/" render={(props)=>{
        return <Home title="Hello" history={props.history} match={props.match}/>
        }} /> 
      <Route exact path="/host" component={Host} /> 
      <Route  path="/help" component={Help} /> 
      <Route exact path="/login" component={Login} /> 
      <Route exact path="/signin" component={Signin} /> 
    </Router>
  );
}

export default App;
