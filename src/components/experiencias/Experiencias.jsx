import React from 'react';
import './experiencias.css'

const Experiencias = () => {
    return (
        <section id='experiencia' className='container-eperiencias'>

            <div className="experiencias">
                <h3 className='titulo'>Experiencia</h3>
                <div className="container-item-experiencia">

                <div className="item-experiencia">
                        <div className="anio">
                            <p>2023<br/>Abril</p>
                        </div>
                        <div className="academia">
                            <h4>Backend development with Node.js</h4>
                            <p>Academlo</p>
                        </div>
                     
                    </div>
                    
                    <div className="item-experiencia">
                        <div className="anio">
                            <p>2023<br/>Enero</p>
                        </div>
                        <div className="academia">
                            <h4>Front-End development with React</h4>
                            <p>Academlo</p>
                        </div>
                     
                    </div>
                    <div className="item-experiencia">
                        <div className="anio">
                            <p>2022<br/>Setiembre</p>
                        </div>
                    
                        <div className="academia">
                            <h4>HTML-CSS</h4>
                            <p>Academlo</p>
                        </div>
                      
                    </div>
                    <div className="item-experiencia">
                        <div className="anio">
                            <p>2017</p>
                        </div>
                       
                        <div className="academia">
                            <h4>Kotlin</h4>
                            <p>Android Studio</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Experiencias;