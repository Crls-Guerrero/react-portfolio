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
    <div className="skills-slider">
      <div className='slider'>
        <div className='slider-img'><img src={Html} className='ico' alt="HTML" /></div>
        <div className='slider-img'><img src={Css} className='ico' alt="Css" /></div>
        <div className='slider-img'><img src={Js} className='ico' alt="Js" /></div>
        <div className='slider-img'><img src={Sql} className='ico' alt="Sql" /></div>
        <div className='slider-img'><img src={Github} className='ico' alt="Github" /></div>
        <div className='slider-img'><img src={Git} className='ico' alt="Git" /></div>
        <div className='slider-img'><img src={Figma} className='ico' alt="Figma" /></div>
        <div className='slider-img'><img src={ReactIco} className='ico' alt="React" /></div>
        <div className='slider-img'><img src={Php} className='ico' alt="PHP" /></div>     
        <div className='slider-img'><img src={Html} className='ico' alt="HTML" /></div>
        <div className='slider-img'><img src={Css} className='ico' alt="Css" /></div>
        <div className='slider-img'><img src={Js} className='ico' alt="Js" /></div>
        <div className='slider-img'><img src={Sql} className='ico' alt="Sql" /></div>
        <div className='slider-img'><img src={Github} className='ico' alt="Github" /></div>
        <div className='slider-img'><img src={Git} className='ico' alt="Git" /></div>
        <div className='slider-img'><img src={Figma} className='ico' alt="Figma" /></div>
        <div className='slider-img'><img src={ReactIco} className='ico' alt="React" /></div>
        <div className='slider-img'><img src={Php} className='ico' alt="PHP" /></div>     
        
      </div> 
    </div>
  )
}

export default Skills