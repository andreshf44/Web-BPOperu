import React, { useState, useEffect } from 'react';
import './Components.css';  

const TopicDetail = () => {
    return (
        <div className="container-detail">
            <div className='first-section'>
                <div className='left-side'>
                    <h3>Certificados Digitales</h3>
                    <p>Proporcionamos distintos tipo de certificados digitales, 
                        asegurando la validez legal y la protección de tus documentos 
                        firmados electrónicamente. Garantizamos cumplimiento normativo y 
                        seguridad en cada transacción digital.</p>
                    <button>Agendar una cita con ventas</button>
                </div>
                <div className='right-side'>
                    <img src='/imagenHomePeru.jpg'></img>
                </div>
            </div>
            <div className='second-section'>
                <div className='left-side'>
                    <ul>
                        <li>Descripción</li>
                        <li>Persona natural</li>
                        <li>Representante legal</li>
                        <li>Empleado o funcionario</li>
                        <li>Profesional o colegio</li>
                        <li>Factura electrónica</li>
                    </ul>
                </div>
                <div className='right-side'>
                    <div className='information'>
                        <h3>Descripción</h3>
                        <p>Emitimos certificados digitales de acuerdo al perfil y necesidad de cada 
                            persona: Personas naturales, Personas jurídicas y Profesionales. 
                            La vigencia de cada certificado puede ser de 01, 02 o 03 años. 
                            Navega entre los diferentes tipos de certificados que ofrecemos y 
                            encuentra el tuyo.
                        </p>
                    </div>
                    <div className='information'>
                        <h3>Persona natural</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                            est laborum.
                        </p>
                    </div>
                    <div className='information'>
                        <h3>Representante legal</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                            est laborum.
                        </p>
                    </div>
                    <div className='information'>
                        <h3>Empleado o funcionario</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                            est laborum.
                        </p>
                    </div>
                    <div className='information'>
                        <h3>Profesional o colegio</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                            est laborum.
                        </p>
                    </div>
                    <div className='information'>
                        <h3>Factura electrónica</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                            est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopicDetail;