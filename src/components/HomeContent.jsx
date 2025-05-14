// src/components/HomeContent.js
import React from 'react';
import './HomeContent.css';

const HomeContent = () => {
    return (
        <div className={"home-content-container"} >
            <div className="home-first-section">
                <h2>Protege tus procesos con nuestras <br/>
                    soluciones avanzadas de firma <br/>
                    electrónica y digital.
                </h2>
                <button>
                    <a href="#">Descubre nuestras soluciones</a>
                </button>
            </div>

            <div className={"home-second-section"}>
                <div className={"h3-phrase"}>
                    <h3>¿Tu empresa enfrenta estos retos?</h3>
                </div>
                <div className="simbols-container">
                    <div className={"simbol"}>
                        <img src="address-card-solid.png" alt="ex-icon1"/>
                        <p>Fraude y suplantación <br/> de identidad</p>
                    </div>
                    <div className={"simbol"}>
                        <img src="sack-dollar-solid.png" alt="ex-icon2"/>
                        <p>Altos costos<br/> operativos</p>
                    </div>
                    <div className={"simbol"}>
                        <img src="unlock-solid.png" alt="ex-icon3"/>
                        <p>Falta de seguridad en<br/> documentos electrónicos</p>
                    </div>
                    <div className={"simbol"}>
                        <img src="clock-solid.png" alt="ex-icon4"/>
                        <p>Procesos burocráticos <br/> lentos</p>
                    </div>
                    <div className={"simbol"}>
                        <img src="triangle-exclamation-solid.png" alt="ex-icon5"/>
                        <p>Cumplimiento <br/> normativo incierto</p>
                    </div>
                </div>
                <div className={"help-button"}>
                    <button>
                        <a href="#">Podemos ayudarte</a>
                    </button>
                </div>
            </div>

            <div className={"home-third-section"}>
                <div className={"content-third-section"}>
                    <h2>
                        Transforma tu forma de trabajar <br/>con nuestras soluciones
                    </h2>
                    <div className={"bulletin-section"}>
                        <div className={"bulletin"}>
                            <div className={"bulletin-main-content"}>
                                <h3>Firma digital y certificados digitales</h3>
                                <p> Seguridad y validez legal en cada documento.</p>
                                <button>
                                    <a href="#">Conocer más</a>
                                </button>
                            </div>
                            <div className={"bulletin-image"}>
                                <img src="standard-quality-control-concept-m (1) 1.png" alt="bulletin1"/>
                            </div>
                        </div>
                        <div className={"bulletin"}>
                            <div className={"bulletin-main-content"}>
                                <h3>Firma remota</h3>
                                <p> Firma documentos desde cualquier lugar y dispositivo.</p>
                                <button>
                                    <a href="#">Conocer más</a>
                                </button>
                            </div>
                            <div className={"bulletin-image"}>
                                <img src="crop-boss-employee-coworking 1.png" alt="bulletin2"/>
                            </div>
                        </div>
                        <div className={"bulletin"}>
                            <div className={"bulletin-main-content"}>
                                <h3>Identificación digital</h3>
                                <p> Verifica identidades y evita fraudes. </p>
                                <button>
                                    <a href="#">Conocer más</a>
                                </button>
                            </div>
                            <div className={"bulletin-image"}>
                                <img src="face-recognition-personal-identification-collage 1.png" alt="bulletin3"/>
                            </div>
                        </div>
                        <div className={"bulletin"}>
                            <div className={"bulletin-main-content"}>
                                <h3>Sellado de tiempo</h3>
                                <p> Protege documentos con fecha y hora certificada. </p>
                                <button>
                                    <a href="#">Conocer más</a>
                                </button>
                            </div>
                            <div className={"bulletin-image"}>
                                <img src="planner-calendar-schedule-date-concept 1.png" alt="bulletin4"/>
                            </div>
                        </div>
                        <div className={"bulletin"}>
                            <div className={"bulletin-main-content"}>
                                <h3>Optimización de procesos</h3>
                                <p>Automatiza y digitaliza la gestión documental. </p>
                                <button>
                                    <a href="#">Conocer más</a>
                                </button>
                            </div>
                            <div className={"bulletin-image"}>
                                <img
                                    src="hand-using-laptop-computer-with-virtual-screen-document-online-approve-paperless-quality-assurance-erp-management-concept 1.png"
                                    alt="bulletin5"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default HomeContent;