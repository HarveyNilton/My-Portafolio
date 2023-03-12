import React from 'react';
import './myhabiliti.css'
import react from '/src/assets/imag/react.png'
import html from '/src/assets/imag/html.png'
import css from '/src/assets/imag/css.png'
import nodejs from '/src/assets/imag/node.png'
import javascript from '/src/assets/imag/js.png'
import android from '/src/assets/imag/android.png'
import kotlin from '/src/assets/imag/kotlin.png'

const MyHabiliti = () => {
    return (
        <section id='habilidades' className='container-my-habilidades'>
            <div className="habilidades">
                <h3 className='titulo'>Mis Habilidades</h3>

                <div className="icon-habilidades">
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={react} alt="" />
                        <p>React</p>
                    </figure>
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={html} alt="" />
                        <p>HTML</p>
                    </figure>
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={css} alt="" />
                        <p>CSS</p>
                    </figure>
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={nodejs} alt="" />
                        <p>Node.js</p>
                    </figure>
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={javascript} alt="" />
                        <p>JavaScript</p>
                    </figure>
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={android} alt="" />
                        <p>Android Studio</p>
                    </figure>
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={kotlin} alt="" />
                        <p>Kotlin</p>
                    </figure>

                </div>

            </div>
        </section>
    );
};

export default MyHabiliti;