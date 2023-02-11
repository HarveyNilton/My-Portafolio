import React from 'react';
import './home.css'
import imgPerfil from '/src/assets/imag/foto-portafolio.png'

const Home = () => {
    return (
        <div className="home">
            <article className='home-description'>
                <h4>Diseñador y <br />  Programador Web</h4>
                <div className="red-social">
                    <a href="https://www.linkedin.com/in/harvey-nilton-lopez-qui%C3%B1ones-865a88224/" target="_blank">

                        <svg className='icon-social' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 112.196 112.196" style={{ background: '0 0 112.196 112.196' }} ><g><circle style={{ fill: '#007AB9' }} cx="56.098" cy="56.097" r="56.098" /><g><path style={{ fill: "#F1F2F2" }} d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118 c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715 c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662 C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967 c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z M27.865,83.739H41.27V43.409H27.865V83.739z" /></g></g></svg>
                    </a>

                    <a href="https://web.facebook.com/harveynilton" target="_blank">

                        <svg className='icon-social' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 112.196 112.196" style={{ background: '0 0 112.196 112.196' }} ><g><circle style={{ fill: '#3B5998' }} cx="56.098" cy="56.098" r="56.098" /><path style={{ fill: '#FFFFFF' }} d="M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34 c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z" /></g></svg>
                    </a>
                    <a href="https://twitter.com/harveyNilton" target="_blank">
                        <svg className='icon-social' viewBox="0 0 152 152" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><g id="Color"><g id="_04.Twitter" data-name="04.Twitter"><circle id="Background" cx="76" cy="76" style={{fill:"#03a9f4"}}  r="76" /><path id="Icon" d="m125.23 45.47a42 42 0 0 1 -11.63 3.19 20.06 20.06 0 0 0 8.88-11.16 40.32 40.32 0 0 1 -12.8 4.89 20.18 20.18 0 0 0 -34.92 13.8 20.87 20.87 0 0 0 .47 4.6 57.16 57.16 0 0 1 -41.61-21.11 20.2 20.2 0 0 0 6.21 27 19.92 19.92 0 0 1 -9.12-2.49v.22a20.28 20.28 0 0 0 16.17 19.82 20.13 20.13 0 0 1 -5.29.66 18 18 0 0 1 -3.83-.34 20.39 20.39 0 0 0 18.87 14.06 40.59 40.59 0 0 1 -25 8.61 36.45 36.45 0 0 1 -4.83-.28 56.79 56.79 0 0 0 31 9.06c37.15 0 57.46-30.77 57.46-57.44 0-.89 0-1.75-.07-2.61a40.16 40.16 0 0 0 10.04-10.48z" style={{fill:"#fff"}}  /></g></g></g></svg>
                    </a>
                </div>
            </article>

            <article className='home-image-perfil'>
                <figure className='container-image-perfil'>
                    <img src={imgPerfil} alt="" />

                </figure>
                <h2 className='home-name-perfil'>Hola soy Harvey</h2>
            </article>

        </div>
    );
};

export default Home;