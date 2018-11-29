import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const movies = [
      {name: 'King Kong', duration:120},
      {name: 'Harry Potter', duration:130},
      {name: 'Godfather', duration:180}
    ];

    const elementMovies = movies.map( movie =>
      <div>
        <h2>{movie.name}</h2>
        <p>{movie.duration}</p>
      </div>
      );
    return (
      <div className="App">
        {elementMovies}
      </div>
    );
  }
}

export default App;
