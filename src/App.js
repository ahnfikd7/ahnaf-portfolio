import React from 'react';
import Home from './components/Home/Home';

import './App.css';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;