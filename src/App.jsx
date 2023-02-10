import { useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import NavBar from './components/menu-float/NavBar'
import MyHabiliti from './components/mis-habilidades/MyHabiliti'

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
              <p>Hola Soy Harvey, soy una persona proactivo, siempre me ha gustado la tecnologia por lo que decidi seguir estudiando Ingenieria de Sistemas en la Univerdida de Mi Pais (Perú) el cual llegé a aprender buenos valores muy aparte que ya lo tenia por que formo parte de mi Intitución Militar (Marina de Guerra del Perú) en donde nos inculcan a ser disciplinado en todos ambitos. En la actualidad Soy un programador Web en Front-End con React egresado de <b>Academlo</b>. Estoy dispuesto a formar parte del equipo de trabajo a requerimiento de su empresa o compañia. </p>
            </div>
          </div>

        </section>

        <MyHabiliti />

      </main>

      <NavBar />
      

    </div>
  )
}

export default App
