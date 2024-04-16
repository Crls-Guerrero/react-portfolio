import React from 'react'
import { useState } from 'react';
import "../style/Project.css"
import Html from "../img/poued.png"

function Project() {
  const [projects] = useState([
    { img: Html, imgName: 'Html', description: 'Desarrollo de un SaaS basado en Inteligencia Artificial que a través de modelos predictivos usa el histórico de datos del usuario y permite mejorar la conversión de leads.',
     tecnologias: 'HTML | CSS | JavaScript', link:'' },
     { img: Html, imgName: 'Html', description: 'Desarrollo de un SaaS basado en Inteligencia Artificial que a través de modelos predictivos usa el histórico de datos del usuario y permite mejorar la conversión de leads.',
     tecnologias: 'HTML | CSS | JavaScript', link:'' },
     { img: Html, imgName: 'Html', description: 'Desarrollo de un SaaS basado en Inteligencia Artificial que a través de modelos predictivos usa el histórico de datos del usuario y permite mejorar la conversión de leads.',
     tecnologias: 'HTML | CSS | JavaScript', link:'' },
     { img: Html, imgName: 'Html', description: 'Desarrollo de un SaaS basado en Inteligencia Artificial que a través de modelos predictivos usa el histórico de datos del usuario y permite mejorar la conversión de leads.',
     tecnologias: 'HTML | CSS | JavaScript', link:'' },
     { img: Html, imgName: 'Html', description: 'Desarrollo de un SaaS basado en Inteligencia Artificial que a través de modelos predictivos usa el histórico de datos del usuario y permite mejorar la conversión de leads.',
     tecnologias: 'HTML | CSS | JavaScript', link:'' },
     { img: Html, imgName: 'Html', description: 'Desarrollo de un SaaS basado en Inteligencia Artificial que a través de modelos predictivos usa el histórico de datos del usuario y permite mejorar la conversión de leads.',
     tecnologias: 'HTML | CSS | JavaScript', link:'' },
     { img: Html, imgName: 'Html', description: 'Desarrollo de un SaaS basado en Inteligencia Artificial que a través de modelos predictivos usa el histórico de datos del usuario y permite mejorar la conversión de leads.',
     tecnologias: 'HTML | CSS | JavaScript', link:'' },
     { img: Html, imgName: 'Html', description: 'Desarrollo de un SaaS basado en Inteligencia Artificial que a través de modelos predictivos usa el histórico de datos del usuario y permite mejorar la conversión de leads.',
     tecnologias: 'HTML | CSS | JavaScript', link:'' },
    
  ]);

  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleShowMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  return (
    <div className='project'>
        <div data-aos="fade-right">
          <h1>Projects</h1>
        </div>
    
        {projects.slice(0, visibleProjects).map((project) => (
          <div  className='card-project' data-aos="fade-right">
            <div className='img-project'>
              <img src={project.img} alt={project.imgName} />          
            </div>
            <div className='content-project'>
              <div className='description-content'>
                <p>{project.description}</p>
              </div>
              <div className='lenguaje-content'>
                <div className='lenguaje-part1'>
                  <h3>Tecnologias usadas:</h3>
                  <p>{project.tecnologias}</p>
                </div>

                
                <div className='lenguaje-part2'>
                  <a href={project.link}>Visitar</a>
                </div>
              </div>
            </div>
          </div>           
        ))}

        {visibleProjects < projects.length && (
            <button className='project-buttom' onClick={handleShowMoreProjects}>Ver más</button>
        )}

    </div>
  );
  
}

export default Project;