import React from 'react';
import './myhabiliti.css'
import react from '/src/assets/imag/react.png'
import html from '/src/assets/imag/html.png'
import css from '/src/assets/imag/css.png'
import nodejs from '/src/assets/imag/node.png'
import javascript from '/src/assets/imag/js.png'
import android from '/src/assets/imag/android.png'
import kotlin from '/src/assets/imag/kotlin.png'
import bcrypt from '/src/assets/imag/bcrypt.png'
import nodemailer from '/src/assets/imag/nodemailer.png'
import env from '/src/assets/imag/env.png'
import nodemon from '/src/assets/imag/nodemon.png'
import jwt from '/src/assets/imag/jsonwebtoken.png'
import reactRouter from '/src/assets/imag/react-router-dom.png'
import sequelize from '/src/assets/imag/sequelize.png'
import styled from '/src/assets/imag/styled.png'
import swagger from '/src/assets/imag/swagger.png'
import reactForm from '/src/assets/imag/react-hook-form.png'
import express from '/src/assets/imag/express.png'
import validation from '/src/assets/imag/expresval.png'
import axios from '/src/assets/imag/axios.png'
import redux from '/src/assets/imag/redux.png'

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
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={bcrypt} alt="" />
                        <p>Bcrypt</p>
                    </figure>
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={nodemailer} alt="" />
                        <p>Nodemailer</p>
                    </figure>
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={env} alt="" />
                        <p>.env</p>
                    </figure>
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={nodemon} alt="" />
                        <p>Nodemon</p>
                    </figure>
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={jwt} alt="" />
                        <p>JWT</p>
                    </figure>
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={reactRouter} alt="" />
                        <p>React Router</p>
                    </figure>
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={sequelize} alt="" />
                        <p>Sequelize</p>
                    </figure>

                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={styled} alt="" />
                        <p>Styled Component</p>
                    </figure>
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={swagger} alt="" />
                        <p>Swagger</p>
                    </figure>
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={reactForm} alt="" />
                        <p>React Form</p>
                    </figure>
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={express} alt="" />
                        <p>Express</p>
                    </figure>
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={validation} alt="" />
                        <p>Express Validation</p>
                    </figure>
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={axios} alt="" />
                        <p>Axios</p>
                    </figure>
                    <figure className='item-habilidades'>
                        <img className='icon-hab' src={redux} alt="" />
                        <p>Redux</p>
                    </figure>
                </div>

            </div>
        </section>
    );
};

export default MyHabiliti;