import React from "react";
class Footer extends React.Component{
    render(){
        return(
<>
  {/* Footer */}
  <section id="footer">
    <div className="footer container">
      <div className="brand">
        <h1>
          <span>M</span>OHAMED <span>S</span>AHITH
        </h1>
      </div>
      <h2>FOLLOW ME :)</h2>
      <div className="social-icon">
        <div className="social-item">
          <a href="https://www.facebook.com/mohamed.sahith.56/">
            <img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" />
          </a>
        </div>
        <div className="social-item">
          <a href="https://www.instagram.com/actor_sahith/">
            <img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" />
          </a>
        </div>
        <div className="social-item">
          <a href="https://www.linkedin.com/in/mohamed-sahith-s-1b314117b/">
            <img src="https://img.icons8.com/bubbles/344/linkedin.png" />
          </a>
        </div>
      </div>
      <p>Copyright © 2022 SAHITH. All rights reserved</p>
    </div>
  </section>
  {/* End Footer */}
</>
);
}
}
export default Footer;