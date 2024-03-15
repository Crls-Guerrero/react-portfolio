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
    <div class="skills">
        <img src={Html} className='ico' alt="HTML" />
        <img src={Css} className='ico' alt="Css" />
        <img src={Js} className='ico' alt="Js" />
        <img src={Sql} className='ico' alt="Sql" />
        <img src={Github} className='ico' alt="Github" />
        <img src={Git} className='ico' alt="Git" />
        <img src={Figma} className='ico' alt="Figma" />
        <img src={ReactIco} className='ico' alt="React" />
        <img src={Php} className='ico' alt="PHP" />
    </div>
  )
}

export default Skills