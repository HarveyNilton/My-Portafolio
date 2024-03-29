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
          <h2 className='name-logo'>Harvey <span>Lopez</span> </h2>
          <ul className='content-menu show'>
            <li><a href="/">Home</a></li>
            <li><a href="#acerca-de-mi">Acerca de mi</a></li>
            <li><a href="#habilidades">Mis habilidades</a></li>
            <li><a href="#experiencia">Experiencias</a></li>
            <li><a href="#portafolio">Mi portafolio</a></li>
            <li><a href="#contacto">Contactame</a></li>

          </ul>
        </div>
      </header>

      <main className='main'>
        <div className='content-colorfondo'></div>

        <Home />
        <section className='container-cv'>

          <a className="cv" href={cvharvey} target="_blank" download='CV-Harvey Nilton Lopez Quiñones'>Dowload CV
            <svg className='icon-cv' fill="none" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g ><path d="m37 30v13h9.633c7 0 13.023-5.379 13.352-12.372.352-7.465-5.597-13.628-12.985-13.628-.017 0-.033.002-.05.003-.518-8.37-7.45-15.003-15.95-15.003-7.833 0-14.339 5.632-15.719 13.065-.423-.039-.848-.065-1.281-.065-7.95601 0-14.363009 6.637-13.9840086 14.677.3549996 7.53 6.8409986 13.323 14.3790086 13.323h10.605v-13c0-2.209 1.791-4 4-4h4c2.209 0 4 1.791 4 4z" style={{ fill: "#fffff" }}></path><path d="m33 30v18h4c.552 0 1 .448 1 1 0 .222-.086.416-.208.582l-6.012 8.018c-.183.237-.457.4-.78.4s-.597-.163-.78-.401l-6.012-8.018c-.122-.165-.208-.359-.208-.581 0-.552.448-1 1-1h4v-18z" style={{ fill: "#fffff" }}></path></g></svg>
          </a>




        </section>

        <section id='acerca-de-mi' className='container-acerca-de-mi'>
          <div className="text">
            <h3 className='titulo'>Acerca de mi</h3>
            <div className='description-acerca-de-mi'>
              <p>Soy proactivo, siempre me ha fascinado la tecnología por lo que decidí continuar estudiando Ingeniería de Sistemas en la Universidad Telesup de Mi País (Perú) el cual obtenía conocimientos de programación básicos.
               <br/> Así también desde el año 2001 me encuentro laborando en la Marina de Guerra del Perú, el cual nos manejamos disciplinadamente ya que es una característica principal de todo militar.
               <br/> Desde octubre 2022 decidí continuar con los estudios de programación por lo que  califique en Academlo, para cursar  el bootcamp de Full-Stack, culminando satisfactoriamente en abril del 2023  con conocimientos de Front-End y Backend con React y node.js
              </p>
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
