import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Search from './components/Search.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <br />
          <h5 className="App-title">Welcome to PokeDeck!</h5>
        </header>
        <div className="App-intro">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
