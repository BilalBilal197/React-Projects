import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Movie from './Movie'

// const apiKey = "fec8b5ab27b292a68294261bb21b04a5";
// const singleMovieUrl = "https://api.themoviedb.org/3/movie/"
// const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing";
// const imageUrl = "http://image.tmdb.org/t/p/w300";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul> */}

        <Route exact path='/' component={Home} />
        <Route exact path='/movie/:movieId' component={Movie} />

      </div>
    </Router>
  );
}

export default App;
