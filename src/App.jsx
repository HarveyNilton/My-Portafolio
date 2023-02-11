import { useState } from 'react'
import './App.css'
import Experiencias from './components/experiencias/Experiencias'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import NavBar from './components/menu-float/NavBar'
import MyHabiliti from './components/mis-habilidades/MyHabiliti'
import Portafolio from './components/portafolio/Portafolio'

import cvharvey from '/src/assets/cv/cv-harvey.pdf'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <header className='header'>
        <div className="capa-header">
          <h2 className='name-logo'>My Portafolio</h2>
        </div>
      </header>

      <main className='main'>

        <Home />
        <section className='container-cv'>
          <div className="cv">
          <a href={cvharvey} target="_blank" download='CV-harvey Nilton Lopez Quiñones'>Dowload CV</a>
          </div>
         
        </section>

        <section id='acerca-de-mi' className='container-acerca-de-mi'>
          <div className="text">
            <h3 className='titulo'>Acerca de mi</h3>
            <div className='description-acerca-de-mi'>
              <p>Soy una persona proactivo, siempre me ha gustado la tecnología por lo que decidi seguir estudiando Ingenieria de Sistemas en la Universidad de Mi Pais (Perú) el cual llegué a optener varios conocimientos de programación. <br /> Desde el año 2001 me encuentro laborando en la Marina de Guerra del Perú el cual ya alcance el grado de Técnico 2do., hoy en dia soy egresado de <b>Academlo</b> en el que optenido conocimiento de Diseño y Programación Web de Front-End con React. <br /> Estoy capacitado y apto para formar parte del equipo de trabajo a requerimiento de su empresa o compañia. </p>
            </div>
          </div>

        </section>

        <MyHabiliti />

        <Experiencias />

        <Portafolio />

        <Footer />
      </main>

      <NavBar />

    </div>
  )
}

export default App
