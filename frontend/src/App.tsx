import './App.css';
import React from "react";
import Header from './components/header/Header';
import Drawer from './components/drawer/Drawer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Drawer></Drawer>
    </div>
  );
}

export default App;
