import React from 'react';
import './portafolio.css'
import ecommerce from '/src/assets/video/ecommerce.mp4'

const Portafolio = () => {
    return (
        <section className='container-portafolio'>
            <div className="portafolio">
                <h3 className='titulo'>Portafolio</h3>
                <div className="container-item-portafolio">

                    <a className="item-portafolio" href="">
                        <div className="conatainer-img-portafolio">
                            <div className='video'>
                                <video className='digital-arch' controls>
                                    <source  src={ecommerce} type="video/mp4" />
                                </video>
                        
                            </div>
                            <div className="description">
                                <h4>name</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quibusdam facilis, maxime id aspernatur rem placeat?</p>
                            </div>
                        </div>
                    </a>


                    <div className="item-portafolio">

                        <div className="conatainer-img-portafolio">
                            <div className='video'>
                              
                            </div>
                            <div className="description">
                                <h4>name</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quibusdam facilis, maxime id aspernatur rem placeat?</p>
                            </div>
                        </div>
                    </div>

                    <div className="item-portafolio">

                        <div className="conatainer-img-portafolio">
                            <div className='video'>
                               
                            </div>
                            <div className="description">
                                <h4>name</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quibusdam facilis, maxime id aspernatur rem placeat?</p>
                            </div>
                        </div>
                    </div>

                    <div className="item-portafolio">

                        <div className="conatainer-img-portafolio">
                            <div className='video'>
                               
                            </div>
                            <div className="description">
                                <h4>name</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quibusdam facilis, maxime id aspernatur rem placeat?</p>
                            </div>
                        </div>
                    </div>

                    <div className="item-portafolio">

                        <div className="conatainer-img-portafolio">
                            <div className='video'>
                                
                            </div>
                            <div className="description">
                                <h4>name</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quibusdam facilis, maxime id aspernatur rem placeat?</p>
                            </div>
                        </div>
                    </div>

                    <div className="item-portafolio">

                        <div className="conatainer-img-portafolio">
                            <div className='video'>
                               
                            </div>
                            <div className="description">
                                <h4>name</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quibusdam facilis, maxime id aspernatur rem placeat?</p>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </section>
    );
};

export default Portafolio;