import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'src/components/Home/Home.jsx';
import About from 'src/components/About/About.jsx';
import Education from 'src/components/Education/Education.jsx';
import Experience from "src/components/Experience/Experience.jsx";
import Project from "src/components/Projects/Project.jsx";
import Skills from 'src/components/Skills/Skill.jsx';
import Resume from "src/components/Resume/Resume.jsx";
import Contact from 'src/components/Contact/Contact.jsx';

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
        <Route path='/about'element={<About />} />
        <Route path='/education'element={<Education />} />
        <Route path='/skills'element={<Skills />} />
        <Route path='/contacts'element={<Contact/>} />
        <Route path='/experience'element={<Experience/>}/>
        <Route path='/project'element={<Project/>}/>
        <Route path='/resume'element={<Resume/>}/>
      </Routes>
    </Router>
  );
}

export default App;
