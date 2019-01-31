import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AppRouter />

      </div>
    );

  }
}

export default App;
