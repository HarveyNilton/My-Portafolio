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

                        <svg className='icon-social' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 112.196 112.196" style={{ background: '0 0 112.196 112.196' }} xml:space="preserve"><g><circle style={{ fill: '#007AB9' }} cx="56.098" cy="56.097" r="56.098" /><g><path style={{ fill: "#F1F2F2" }} d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118 c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715 c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662 C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967 c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z M27.865,83.739H41.27V43.409H27.865V83.739z" /></g></g></svg>
                    </a>

                    <a href="https://web.facebook.com/harveynilton" target="_blank">

                        <svg className='icon-social' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 112.196 112.196" style={{ background: '0 0 112.196 112.196' }} ><g><circle style={{ fill: '#3B5998' }} cx="56.098" cy="56.098" r="56.098" /><path style={{ fill: '#FFFFFF' }} d="M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34 c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z" /></g></svg>
                    </a>
                    <a href={`https://api.whatsapp.com/send?phone=${+51964505483}&text=${"Hola Harvey Nilton deseo platicar con ud. sobre sus habilidades de programación"}`} target="_blank">
                        <svg className='icon-social' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 58 58" style={{ background: '0 0 58 58' }}><g><path style={{ fill: '#2CB742' }} d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5 S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z" /><path style={{ fill: '#FFFFFF' }} d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42 c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242 c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169 c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097 c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z" /></g></svg>
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