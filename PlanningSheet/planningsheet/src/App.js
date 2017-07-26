import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlanningTool from './js/PlanningTool.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlanningTool />
      </div>
    );
  }
}

export default App;
