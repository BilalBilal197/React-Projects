import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Home = () => <h1>Home</h1> // its the simplest possible functional component
const About = () => <h1>About</h1>

function App() {
  // route is similar to rendering the whole component like <Home />
  /* <Route path="/" component={Home} />  non-exact path will put Home always at top so use exact path as shown below*/
  return (
    <Router>
      <h1>Header</h1>
      <div>
        {/* we dont use a tags. that's so 2014 -- anchor tags will take us away from the app*/}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Route exact path="/" component={Home} /> 
      <Route path="/about" component={About} /> 
      <h1>Footer</h1>
    </Router>
  );
}

export default App;
