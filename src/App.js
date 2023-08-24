import React from 'react';
import "./App.css"
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx';
import About from './components/about/About';
import Skills from './components/skills/Skills';

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
