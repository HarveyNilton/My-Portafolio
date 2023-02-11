import { useState } from 'react'
import './App.css'
import Experiencias from './components/experiencias/Experiencias'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import NavBar from './components/menu-float/NavBar'
import MyHabiliti from './components/mis-habilidades/MyHabiliti'
import Portafolio from './components/portafolio/Portafolio'

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

        <section className='container-acerca-de-mi'>
          <div className="text">
            <h3 className='titulo'>Acerca de mi</h3>
            <div className='description-acerca-de-mi'>
              <p>Soy una persona proactivo, siempre me ha gustado la tecnología por lo que decidi seguir estudiando Ingenieria de Sistemas en la Universidad de Mi Pais (Perú) el cual llegué a aprender buenos valores muy aparte que ya lo tenia por que formo parte de la Intitución Militar (Marina de Guerra del Perú), donde nos inculcan a ser disciplinado en todos ambitos. En la actualidad Soy programador Web de Front-End con React egresado de <b>Academlo</b>. Estoy dispuesto a formar parte del equipo de trabajo a requerimiento de su empresa o compañia. </p>
            </div>
          </div>

        </section>

        <MyHabiliti />

        <Experiencias />

        <Portafolio />
        
        <Footer/>
      </main>

      <NavBar />

    </div>
  )
}

export default App
