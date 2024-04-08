import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Html from "../img/html-5.png";
import Css from "../img/css-3.png";
import Boostrap from "../img/boostrap.png"
import Tailwind from "../img/tailwind.png"
import Js from "../img/js.png"
import ReactIco from "../img/react.png"
import Sql from "../img/sql-server.png"
import Github from "../img/github.png"
import Git from "../img/git.png"
import Figma from "../img/figma.png"
import Php from  "../img/php.png"
import VsCode from "../img/vscode.png"
import "../style/Skills.css" 

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="skills" id='skills'>
      <div className='slider-track'>
        <div className="slider">
            <div class="slide" data-aos="fade-right" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="1000">
              <img src={Html} alt="Html" />
              <p>HTML5</p>
            </div>
            <div class="slide" data-aos="fade-right" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="1000">
              <img src={Css} alt="Css" />
              <p>CSS3</p> 
            </div>
            <div class="slide" data-aos="fade-down" data-aos-offset="250" data-aos-easing="linear" data-aos-duration="1500">
              <img src={Js} alt="Js" />
                <p>JavaScript</p>
            </div>
            <div class="slide" data-aos="fade-left" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="1000">
              <img src={ReactIco} alt="ReactIco" />
                <p>React</p>
            </div>
            <div class="slide" data-aos="fade-left" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="1000">
              <img src={Sql} alt="Sql" />
                <p>SQL Server</p>
            </div>
        </div>
        <div class="slider">
            <div class="slide" data-aos="fade-right" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="1500">
              <img src={Github} alt="Github" />
                <p>Github</p>
            </div>
            <div class="slide" data-aos="fade-right" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="1500">
              <img src={Git} alt="Git" />
                <p>Git</p>
            </div>            
            <div class="slide" data-aos="fade-left" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="1500">
              <img src={Boostrap} alt="Bootstrap" />
                <p>Bootstrap</p>
            </div>
            <div class="slide" data-aos="fade-left" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="1500">
              <img src={Tailwind} alt="Tailwind" />
                <p>Tailwind</p>
            </div>                       
        </div>
        <div class="slider">
            <div class="slide" data-aos="fade-right" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="2000">
              <img src={Php} alt="Php" />
                <p>Php</p>
            </div>
            <div class="slide" data-aos="fade-up" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="2000">
              <img src={Figma} alt="Figma" />
                <p>Figma</p>
            </div>            
            <div class="slide" data-aos="fade-left" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="1500">
              <img src={VsCode} alt="VsCode" />
                <p>VsCode</p>
            </div>                                
        </div>
      </div>
    </div>
    
  )
}

export default Skills