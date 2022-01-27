import './App.css';
import React from "react";
import Dictionary from "./Dictionary.js";


export default function App() {
  return (
    <div className="App"> 
    <div className="container">
      <header>Dictionary</header> 
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">
        <a href="/">Open-source </a>
      code by Agathe M.
      </footer>
    </div>   
    </div>
  )
}

