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
        <a href="https://github.com/AgatheMarieM/react-dictionary" target="_blank" rel="noreferrer">Open-source </a>
      code by Agathe M. using 
      <a href="https://dictionaryapi.dev/" target="_blank" rel="noreferrer"> Dictionary API </a>
      </footer>
    </div>   
    </div>
  )
}

