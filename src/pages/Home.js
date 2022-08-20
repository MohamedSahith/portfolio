import React from"react";
import Config from "../Config.json";

console.log(Config);
class Home extends React.Component{
    render() {
        return(
            <>
  {/* Hero Section  */}
  <section id="hero">
    <div className="hero container">
      <div>
        <h1>
          Hello, <span />
        </h1>
        <h1>
          My Name is <span />
        </h1>
        <h1>
          Mohamed Sahith S <span />
        </h1>
        <a href="#projects" type="button" className="cta">
          Portfolio
        </a>
      </div>
    </div>
  </section>
  {/* End Hero Section  */}
  {/* Projects Section */}
  <section id="projects">
    <div className="projects container">
      <div className="projects-header">
        <h1 className="section-title">
          Recent <span>Projects</span>
        </h1>
      </div>
      <div className="all-projects">
        <div className="project-item">
          <div className="project-info">
          <h1><a href={"https://www.infradigiz.com/web-development/"}>Infradigiz.com</a></h1>
            <h2>Made in Wordpress</h2>
            <p>
              Marketing Agency in Chennai & Digital Marketing Services!
            </p>
          </div>
          <div className="project-img">
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">           
            <h1><a href={"https://www.wildplantts.com/"}>Wildplantts.com</a></h1>
            <h2>Made in Wordpress</h2>
            <p>
              Laser Scanning Technology Company in India!
            </p>
          </div>
          <div className="project-img">
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
            <h1><a href={"https://jmfbadminton.com/"}>jmfbadminton.com</a></h1>
            <h2>Made in Wordpress</h2>
            <p>
              Competency Development and Skill Transformation!
            </p>
          </div>
          <div className="project-img">
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
            <h1><a href={"https://www.leohealthcare.co.in/"}>leohealthcare.co.in</a></h1>
            <h2>Made in Wordpress</h2>
            <p>
              Medical Devices and Accesories!
            </p>
          </div>
          <div className="project-img">
          </div>
        </div>
        <div className="project-item">
          <div className="project-info">
            <h2><a href={"https://www.symmetricnextgen.com/"}>symmetricnextgen.com</a></h2>
            <h3>Made in Wordpress</h3>
            <p>
              Web Development Services and Digital Marketing Agency As a reliable Branding Agency, Symmetricnextgen organizes intelligently created integrated campaigns that ensure a seamless experience for customers.!
            </p>
          </div>
          <div className="project-img">
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Projects Section */}
  {/* About Section */}
  <section id="about">
    <div className="about container">
      <div className="col-left">
        <div className="about-img">
        </div>
      </div>
      <div className="col-right">
        <h1 className="section-title">
          About <span>me</span>
        </h1>
        <h2>Front End Developer</h2>
        <p>
        “Innovative Front End Developer with 1 years experience building and maintaining responsive websites in the recruiting industry. Proficient in HTML, CSS, JavaScript and React. Passionate about usability and possess working knowledge of Adobe Photoshop, Canva, Wordpress, Figma & Spline.“
        </p>
        <a href="#" className="cta">
          Download Resume
        </a>
      </div>
    </div>
  </section>
  {/* End About Section */}
  {/* Contact Section */}
  <section id="contact">
    <div className="contact container">
      <div>
        <h1 className="section-title">
          Contact <span>info</span>
        </h1>
      </div>
      <div className="contact-items">
        <div className="contact-item">
          <div className="icon">
            <img src="https://img.icons8.com/bubbles/100/000000/phone.png" />
          </div>
          <div className="contact-info">
            <h1>Phone</h1>
            <h2>+91 8608101236</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon">
            <img src="https://img.icons8.com/bubbles/100/000000/new-post.png" />
          </div>
          <div className="contact-info">
            <h1>Email</h1>
            <h2>mohamedsahith03@gmail.com</h2>
            <h2>itsmesahith23@gmail.com</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon">
            <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" />
          </div>
          <div className="contact-info">
            <h1>Address</h1>
            <h2>Avadi,Chennai-54</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Contact Section */}
</>

);
    }
}

export default Home;
