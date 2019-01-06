import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ProjectBoard from "./components/ProjectBoard"
import NavBar from "./components/NavBar"

class App extends Component {
  render() {
    return (
    <div className="App">
    <NavBar />
    <ProjectBoard />
    </div>
  );
  }
}

export default App;
