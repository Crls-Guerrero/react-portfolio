import React from 'react'
import "../style/Project.css"
import Html from "../img/poued.png"

function Project() {
  return (
    <div className='project'>
     <h1>Projects</h1>

      {/* Projects */}
      <div className='card-project'>
        <div className='img-project'>
          <img src={Html} alt="Html" />          
        </div>
        <div className='content-project'>
          <div className='description-content'>
            <p>Desarrollo de un SaaS basado en Inteligencia Artificial que a través de modelos predictivos usa el histórico de datos del usuario y permite mejorar la conversión de leads.</p>
          </div>
          <div className='lenguaje-content'>
              <div className='lenguaje-part1'>
                <h3>Tecnologias usadas:</h3>
                <p>React | TAilwind | AWS</p>
              </div>
              <div className='lenguaje-part2'>
                <a href="hh">Visitar</a>
              </div>
          </div>
        </div>
      </div>

      <div className='card-project'>
        <div className='img-project'>
          <img src={Html} alt="Html" />          
        </div>
        <div className='content-project'>
          <div className='description-content'>
            <p>Desarrollo de un SaaS basado en Inteligencia Artificial que a través de modelos predictivos usa el histórico de datos del usuario y permite mejorar la conversión de leads.</p>
          </div>
          <div className='lenguaje-content'>
              <div className='lenguaje-part1'>
                <h3>Tecnologias usadas:</h3>
                <p>React | TAilwind | AWS</p>
              </div>
              <div className='lenguaje-part2'>
                <a href="hh">Visitar</a>
              </div>
          </div>
        </div>
      </div>

      <div className='card-project'>
        <div className='img-project'>
          <img src={Html} alt="Html" />          
        </div>
        <div className='content-project'>
          <div className='description-content'>
            <p>Desarrollo de un SaaS basado en Inteligencia Artificial que a través de modelos predictivos usa el histórico de datos del usuario y permite mejorar la conversión de leads.</p>
          </div>
          <div className='lenguaje-content'>
              <div className='lenguaje-part1'>
                <h3>Tecnologias usadas:</h3>
                <p>React | TAilwind | AWS</p>
              </div>
              <div className='lenguaje-part2'>
                <a href="hh">Visitar</a>
              </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Project;