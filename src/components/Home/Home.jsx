import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import pdf from "/home/syeda/Desktop/Assignment-2/assignment-2/src/components/assets/Profile.pdf";

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
        <h1><Link to="/">Syeda Noorain</Link></h1>
        <h2>I'm <span className="typing">{displayedText}</span>
        <span class="caret">|</span></h2>
        <nav className="header-nav-menu">
          <ul>
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><Link to='/skills'>Skills</Link></li>
            <li><Link to={pdf}>Resume</Link></li>
            <li><Link to="/contacts">Contact</Link></li>
          </ul>
        </nav>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/syeda-noorain-b809a22a2" className="linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.github.com/Noorain464" className="github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:noorainsyeda464@gmail.com" className="google">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
