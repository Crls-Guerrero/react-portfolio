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
      <div className='ls frontend'>
        <h2>Frontend</h2>       
      </div> 
      <div className='ls backend'>
        <h2>Backend</h2>        
      </div>
    </div>
  )
}

export default Skills