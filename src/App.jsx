import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/Header.jsx';
import Search from './components/Search.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div>
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
