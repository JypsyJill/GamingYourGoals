import React, { Component } from "react";
import axios from 'axios';
import routes from "./routes";
import Nav from "./Components/Nav/Nav";
import "./App.css";

function App() {
  return ( 
    <div className="App">
        {routes}
    </div>
    )
  }

export default App;