import React from 'react'
import "../style/Project.css"
import Html from "../img/html-5.png";

function Project() {
  return (
    <div className='project'>
      <div className="all">
        <h2>All Projects</h2>
        <h2>FullStack</h2>
        <h2>Frontend</h2>
        <h2>Backend</h2>
      </div>
      <div className="view-project">
        <div className='view-card'>

          {/* card */}
          <div className="view-content">
            <div className='content-to'>
              <h2>Web Developer</h2>
              <p>Lorem ipsum dolor sit incidunt vitae aliquam dolorem neque in dolore dicta beatae sit id, possimus eius, unde facilis blanditiis ab.</p>
              <div className='view-img'>
                <img src={Html} alt="" />
              </div>
            </div>
            <div className='content-bottom'>
              <a href="hht">View</a>
              <a href="htt">Github</a>
            </div>        
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Project;