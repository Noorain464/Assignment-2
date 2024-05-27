import "/home/syeda/Desktop/Assignment-2/assignment-2/src/components/Home/Home.css";
function Home(){
    return (
        <div id="header" className="header-tops">

            <div className="container">

                <h1><a href="index.html">Prerak Raja</a></h1>
                <h2>I'm <span className="typing"></span></h2>
                <nav className="nav-menu">
                    <ul>
                        <li className="active"><a href="#header"> <span>Home</span></a></li>
                        <li><a href="#about"><span>About</span></a></li>
                        <li><a href="#education"> <span>Education</span></a></li>
                        <li><a href="#experience"> <span>Experience</span></a></li>
                        <li><a href="#portfolio"> <span>Projects</span></a></li>
                        <li><a href="#skills"> <span>Skills</span></a></li>
                        <li><a href="https://drive.google.com/file/d/1pT-Nk6AxY9ZOWBizuDb4htA3IiUF_fSe/view?usp=sharing" target="_blank"> <span>Resume</span></a></li>
                        <li><a href="#contacts"> <span>Contact</span></a></li>
                    </ul>
                </nav>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/rajaprerak" className="linkedin"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.github.com/rajaprerak" className="github"><i className="fa-brands fa-github"></i></a>
                    <a href="mailto:rajaprerak@gmail.com" className="google"><i className="fa-brands fa-google"></i></a>
                </div>
            </div>
        </div>
    )
}
export default Home