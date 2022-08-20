import React from "react";
class Header extends React.Component{
    render(){
        return(
            <>
  <section id="header">
    <div className="header container">
      <div className="nav-bar">
        <div className="brand">
          <a href="#hero">
            <h1>
              <span>M</span>OHAMED <span>S</span>AHITH
            </h1>
          </a>
        </div>
        <div className="nav-list">
          <div className="hamburger">
            <div className="bar" />
          </div>
          <ul>
            <li>
              <a href="#hero" data-after="Home">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" data-after="Projects">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" data-after="About">
                About
              </a>
            </li>
            <li>
              <a href="#contact" data-after="Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</>
    );
    }
}
export default Header;