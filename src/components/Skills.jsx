
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
  return (
    <div className="skills" id='skills'>
      <div className='slider-track'>
        <div className="slider">
            <div className="slide" data-aos="fade-right" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="1000">
              <img src={Html} alt="Html" />
              <p>HTML5</p>
            </div>
            <div className="slide" data-aos="fade-right" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="1000">
              <img src={Css} alt="Css" />
              <p>CSS3</p> 
            </div>
            <div className="slide" data-aos="fade-down" data-aos-offset="250" data-aos-easing="linear" data-aos-duration="1500">
              <img src={Js} alt="Js" />
                <p>JavaScript</p>
            </div>
            <div className="slide" data-aos="fade-left" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="1000">
              <img src={ReactIco} alt="ReactIco" />
                <p>React</p>
            </div>
            <div className="slide" data-aos="fade-left" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="1000">
              <img src={Sql} alt="Sql" />
                <p>SQL Server</p>
            </div>
        </div>
        <div className="slider">
            <div className="slide" data-aos="fade-right" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="1500">
              <img src={Github} alt="Github" />
                <p>Github</p>
            </div>
            <div className="slide" data-aos="fade-right" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="1500">
              <img src={Git} alt="Git" />
                <p>Git</p>
            </div>            
            <div className="slide" data-aos="fade-left" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="1500">
              <img src={Boostrap} alt="Bootstrap" />
                <p>Bootstrap</p>
            </div>
            <div className="slide" data-aos="fade-left" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="1500">
              <img src={Tailwind} alt="Tailwind" />
                <p>Tailwind</p>
            </div>                       
        </div>
        <div className="slider">
            <div className="slide" data-aos="fade-right" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="2000">
              <img src={Php} alt="Php" />
                <p>Php</p>
            </div>
            <div className="slide" data-aos="fade-up" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="2000">
              <img src={Figma} alt="Figma" />
                <p>Figma</p>
            </div>            
            <div className="slide" data-aos="fade-left" data-aos-offset="250" data-aos-easing="ease-in-sine"  data-aos-duration="1500">
              <img src={VsCode} alt="VsCode" />
                <p>VsCode</p>
            </div>                                
        </div>
      </div>

      {/* Skill for movil*/}
      <div className='movil-slider-track'>
        <div className="movil-slider">
            <div className="movil-slide" data-aos="fade-up"  data-aos-easing="ease-in-sine"  data-aos-duration="500">
              <img src={Html} alt="Html" />
              <p>HTML5</p>
            </div>
            <div className="movil-slide"  data-aos="fade-up"  data-aos-easing="ease-in-sine"  data-aos-duration="500">
              <img src={Css} alt="Css" />
              <p>CSS3</p> 
            </div>
            <div className="movil-slide"  data-aos="fade-up"  data-aos-easing="ease-in-sine"  data-aos-duration="500">
              <img src={Js} alt="Js" />
                <p>JavaScript</p>
            </div>
            <div className="movil-slide"  data-aos="fade-up"  data-aos-easing="ease-in-sine"  data-aos-duration="500">
              <img src={ReactIco} alt="ReactIco" />
                <p>React</p>
            </div>   
            <div className="movil-slide"  data-aos="fade-up"  data-aos-easing="ease-in-sine"  data-aos-duration="500">
              <img src={Sql} alt="SQL Server" />
              <p>SQL Server</p>
            </div>
            <div className="movil-slide"  data-aos="fade-up"  data-aos-easing="ease-in-sine"  data-aos-duration="500">
              <img src={Git} alt="Git" />
              <p>Git</p> 
            </div>
            <div className="movil-slide"  data-aos="fade-up"  data-aos-easing="ease-in-sine"  data-aos-duration="500">
              <img src={Github} alt="Github" />
                <p>Github</p>
            </div>
            <div className="movil-slide"  data-aos="fade-up"  data-aos-easing="ease-in-sine"  data-aos-duration="500">
              <img src={Boostrap} alt="Boostrap" />
                <p>Bootstrap</p>
            </div>   
            <div className="movil-slide"  data-aos="fade-up"  data-aos-easing="ease-in-sine"  data-aos-duration="500">
              <img src={Tailwind} alt="Tailwind" />
                <p>Tailwind</p>
            </div> 
            <div className="movil-slide"  data-aos="fade-up"  data-aos-easing="ease-in-sine"  data-aos-duration="500">
              <img src={Php} alt="Php" />
                <p>PHP</p>
            </div> 
            <div className="movil-slide"  data-aos="fade-up"  data-aos-easing="ease-in-sine"  data-aos-duration="500">
              <img src={Figma} alt="Figma" />
                <p>Figma</p>
            </div>  
            <div className="movil-slide"  data-aos="fade-up"  data-aos-easing="ease-in-sine"  data-aos-duration="500">
              <img src={VsCode} alt="VsCode" />
                <p>VsCode</p>
            </div>        
        </div>
        
      </div>

    </div>
    
  )
}

export default Skills