import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '/home/syeda/Desktop/Assignment-2/assignment-2/src/components/Home/Home.jsx';
import About from '/home/syeda/Desktop/Assignment-2/assignment-2/src/components/About/About.jsx';
import Education from '/home/syeda/Desktop/Assignment-2/assignment-2/src/components/Education/Education.jsx';
import Experience from "/home/syeda/Desktop/Assignment-2/assignment-2/src/components/Experience/Experience.jsx";
import Project from "/home/syeda/Desktop/Assignment-2/assignment-2/src/components/Projects/Project.jsx";
import Skills from '/home/syeda/Desktop/Assignment-2/assignment-2/src/components/Skills/Skill.jsx';
import Resume from "/home/syeda/Desktop/Assignment-2/assignment-2/src/components/Resume/Resume.jsx";
import Contact from '/home/syeda/Desktop/Assignment-2/assignment-2/src/components/Contact/Contact.jsx';

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
