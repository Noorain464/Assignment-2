import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skill';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home 
            text={[
              "Coder",
              "Developer",
              "AI Enthusiast",
            ]}
            typingSpeed={100}
            deletingSpeed={50}
            duration={1000}
        />} />
        <Route path="/about" element={<About />} />
        <Route path='/education' element={<Education />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
