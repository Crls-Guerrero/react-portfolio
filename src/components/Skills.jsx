import React from 'react'
import Html from "../img/html-5.png";
import Css from "../img/css-3.png";
import Js from "../img/js.png"
import Sql from "../img/sql-server.png"
import Github from "../img/github.png"
import Git from "../img/git.png"
import Figma from "../img/figma.png"
import ReactIco from "../img/react.png"
import Php from  "../img/php.png"
import "../style/Skills.css" 

function Skills() {
  return (
    <div className="skills" id='skills'>
      <div className="slider">
        <div class="slide-track">
            <div class="slide">
              <img src={Html} alt="Html" />
              <p>HTML5</p>
            </div>
            <div class="slide">
              <img src={Css} alt="Css" />
              <p>CSS3</p>
            </div>
            <div class="slide">
              <img src={Js} alt="Js" />
                <p>JavaScript</p>
            </div>
            <div class="slide">
              <img src={Sql} alt="Sql" />
                <p>SQL Server</p>
            </div>
            <div class="slide">
              <img src={Github} alt="Github" />
                <p>Github</p>
            </div>
            <div class="slide">
              <img src={Git} alt="Git" />
                <p>Git</p>
            </div>
            <div class="slide">
              <img src={ReactIco} alt="ReactIco" />
                <p>React</p>
            </div>
            <div class="slide">
              <img src={Figma} alt="Figma" />
                <p>Figma</p>
            </div>
            <div class="slide">
              <img src={Php} alt="Php" />
              <p>PHP</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills