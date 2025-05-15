// src/components/HomeContent.js
import React, { useContext} from 'react';
import './HomeContent.css';
import { AppContext } from '../context/AppContext';

const HomeContent = () => {
    const { activateTopic } = useContext(AppContext);

    const handleKnowMoreClick = (topicId) => (e) => {
        e.preventDefault();
        activateTopic(topicId);
    };

    return (
        <div className={"home-content-container"}>
            <div className="home-first-section">
                <h2>Protege tus procesos con nuestras <br/>
                    soluciones avanzadas de firma <br/>
                    electrónica y digital.
                </h2>
                <button>
                    <a href="#go-to-selection">Descubre nuestras soluciones</a>
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
                        <a href="#go-to-selection">Podemos ayudarte</a>
                    </button>
                </div>
            </div>

            <div className={"home-third-section"} id={"go-to-selection"}>
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
                                    <a href="#certificados-digitales" onClick={handleKnowMoreClick(1)}>Conocer más</a>
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
                                    <a href="#firma-remota" onClick={handleKnowMoreClick(2)}>Conocer más</a>
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
                                    <a href="#identificacion-digital" onClick={handleKnowMoreClick(6)}>Conocer más</a>
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
                                    <a href="#sellos-de-tiempo" onClick={handleKnowMoreClick(3)}>Conocer más</a>
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
                                    <a href="#procesos-de-negocio" onClick={handleKnowMoreClick(7)}>Conocer más</a>
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
            <footer>
                <div className="footer-content">
                    <img src="idok-logo-white.png" alt="IDOK Logo"/>
                    <p>© 2025 · <a href="https://mail.google.com/mail/?view=cm&fs=1&to=soporte@idok.cl" target="_blank" rel="noopener noreferrer" >soporte@idok.cl</a></p>
                </div>
            </footer>
        </div>

    );
};

export default HomeContent;