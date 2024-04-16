import React from 'react'
import { ReactComponent as Github } from "../svg/github.svg";
import { ReactComponent as Codepen } from "../svg/codepen.svg";
import { ReactComponent as Linkedin } from "../svg/linkedin.svg";
import "../style/Footer.css"

function linkedin(){
  window.open("#","_blank")
};
function github() {
  window.open("https://github.com/Crls-Guerrero", "_blank");
}
function codepen() {
  window.open("https://codepen.io/your-work", "_blank");
}

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container-icons'>
        <Linkedin className="footer-icons" onClick={linkedin}/>
        <Github className="footer-icons" onClick={github}/>
        <Codepen className="footer-icons" onClick={codepen}/>
      </div>
      <div className='footer-container-copyright'>
        <p>Copyright ©Carlos Guerrero - 2024</p>
      </div>
    </div>
  )
}

export default Footer