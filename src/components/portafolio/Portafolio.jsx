import React from 'react';
import './portafolio.css'
import ecommerce from '/src/assets/video/ecommerce.mp4'
import pokedex from '/src/assets/video/pokedex.mp4'
import rickAndMorty from '/src/assets/video/rickAndMorty.mp4'
import mycrud from '/src/assets/video/mycrud.mp4'
import appClima from '/src/assets/video/appclima.mp4'

const Portafolio = () => {
    return (
        <section className='container-portafolio'>
            <div className="portafolio">
                <h3 className='titulo'>Portafolio</h3>
                
                <div className="container-item-portafolio">

                    <a className="item-portafolio" href="https://e-commerce-harvey-lopez.netlify.app/#/" target="_blank">

                        <div className='video'>
                            <video className='digital-arch' controls>
                                <source src={ecommerce} type="video/mp4" />
                            </video>

                        </div>
                        <div className="description">
                            <h4>Ecommerce with React</h4>
                            <p> Aplicación de compra en línea donde los usuarios interactúan con los diferentes productos.
                                <h5>
                                    <br /><br />Diseñado y desarrollado en versión web response. <br /><br />
                                    El backend se implementó con la API Getpostman basada en node.js.
                                    <br /><br />
                                    La aplicación fue probada por colaboradores, colegas, y público en general.
                                </h5>
                            </p>
                        </div>

                    </a>

                    <a className="item-portafolio" href="https://pokedex-harvey-loprez.netlify.app/#/" target="_blank">

                        <div className='video'>
                            <video className='digital-arch' controls>
                                <source src={pokedex} type="video/mp4" />
                            </video>

                        </div>
                        <div className="description">
                            <h4>Pokedex</h4>
                            <p> App simulador de card con información de los Pokemones.
                                <h5>
                                    <br /><br />Diseñado y desarrollado en versión web response. <br /><br />
                                    El backend se implementó con el API Pokeapi basada en node.js.

                                </h5>
                            </p>
                        </div>

                    </a>

                    <a className="item-portafolio" href="https://rick-and-morty-harvey.netlify.app/" target="_blank">

                        <div className='video'>
                            <video className='digital-arch' controls>
                                <source src={rickAndMorty} type="video/mp4" />
                            </video>

                        </div>
                        <div className="description">
                            <h4>Rick And Morty</h4>
                            <p> App simulador de card con información de los personajes de Rick And Mortyn.
                                <h5>
                                    <br /><br />Diseñado y desarrollado en versión web response.
                                    <br /><br />El backend se implementó con el API Rick and Morty basada en node.js.

                                </h5>
                            </p>
                        </div>

                    </a>

                    <a className="item-portafolio" href="https://my-cruds.netlify.app/" target="_blank">

                        <div className='video'>
                            <video className='digital-arch' controls>
                                <source src={mycrud} type="video/mp4" />
                            </video>

                        </div>
                        <div className="description">
                            <h4>My CRUD</h4>
                            <p> Applicativo para registro de personal, donde se puede agredar, editar y remover.
                                <h5>
                                    <br /><br />Diseñado y desarrollado en versión web response.
                                    <br /><br />El backend se implementó con la API Getpostman basada en node.js.

                                </h5>
                            </p>
                        </div>

                    </a>

                    <a className="item-portafolio" href="https://appclimaharveylopez.netlify.app/" target="_blank">

                        <div className='video'>
                            <video className='digital-arch' controls>
                                <source src={appClima} type="video/mp4" />
                            </video>

                        </div>
                        <div className="description">
                            <h4>App Clima</h4>
                            <p> Applicativo simulador del Clima.
                                <h5>
                                    <br /><br />Diseñado y desarrollado en versión web response.
                                    <br /><br />El backend se implementó con la Weather API basada en node.js.

                                </h5>
                            </p>
                        </div>

                    </a>


                </div>
            </div>

        </section>
    );
};

export default Portafolio;