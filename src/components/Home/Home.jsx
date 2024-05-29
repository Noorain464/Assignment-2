import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Home({ text, typingSpeed = 100, deletingSpeed = 50, duration = 1000 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < text[index].length) {
          setDisplayedText((prev) => prev + text[index].charAt(displayedText.length));
        } else {
          setTimeout(() => setDeleting(true), duration);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % text.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index, text, typingSpeed, deletingSpeed, duration]);

  return (
    <div id="header" className="header-tops">
      <div className="container">
        <h1><Link to="/">Prerak Raja</Link></h1>
        <h2>I'm <span className="typing">{displayedText}</span>
        <span class="caret">|</span></h2>
        <nav className="nav-menu">
          <ul>
            <li className="active"><Link to="/"><span>Home</span></Link></li>
            <li><Link to="/about"><span>About</span></Link></li>
            <li><a href="#education"><span>Education</span></a></li>
            <li><a href="#experience"><span>Experience</span></a></li>
            <li><a href="#portfolio"><span>Projects</span></a></li>
            <li><a href="#skills"><span>Skills</span></a></li>
            <li><a href="https://drive.google.com/file/d/1pT-Nk6AxY9ZOWBizuDb4htA3IiUF_fSe/view?usp=sharing"><span>Resume</span></a></li>
            <li><a href="#contacts"><span>Contact</span></a></li>
          </ul>
        </nav>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/rajaprerak" className="linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.github.com/rajaprerak" className="github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:rajaprerak@gmail.com" className="google">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
