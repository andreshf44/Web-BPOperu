import React, { useState, useEffect, useContext } from 'react';
import './Components.css';  // Importamos los estilos de Header
import { AppContext } from '../context/AppContext'; // Importamos el contexto

const Header = () => {
  const { deactivateTopic } = useContext(AppContext);
  const [scrolled, setScrolled] = useState(false); // Estado para saber si hemos hecho scroll
  const [selectedService, setSelectedService] = useState(null); // Estado para almacenar el servicio seleccionado
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Estado para controlar la visibilidad del menu
  const [activeService, setActiveService] = useState(null); // Para gestionar el servicio activo
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [isCountriesVisible, setIsCountriesVisible] = useState(false);// Estado para manejar la visibilidad de la lista de países

  const { setHasScrolled, activateTopic } = useContext(AppContext);

  const serviceToTopicMap = {
    'Certificados digitales': 1,
    'Firma remota': 2,
    'Sellos de tiempo': 3,
    'Acreditaciones': 4,
    'Repositorio': 5,
    'Identificación digital': 6,
    'Procesos de negocio': 7,
    'Sobre nosotros': 8,
    // Añadir más mapeos según los topicServices disponibles en Home.js
  };

  // Mapeo para las pestañas específicas dentro de cada topic
  const serviceToTabMap = {
    'persona-natural': { topicId: 1, tabIndex: 1 }, // "Persona natural" está en el índice 1 del topic 1
    'representante-legal': { topicId: 1, tabIndex: 2 },
    'empleado': { topicId: 1, tabIndex: 3 },
    'abogado': { topicId: 1, tabIndex: 4 },
    'contador': { topicId: 1, tabIndex: 4 },
    'medico': { topicId: 1, tabIndex: 4 },
    'otros-profesionales': { topicId: 1, tabIndex: 4 }
  };


  // Datos de los servicios

  const services = [
    {
      id: 1,
      name: 'Beneficios',
      description: (
          <>
            <div className="company-info-content">
              <section className="info-section">
                <h2>Nosotros</h2>
                <div className="blue-line"></div>
                <p className="main-description">
                  Impulsando el futuro digital de tus negocios
                </p>
                <p className="description-text">
                  BPO IDOK es una empresa líder en la optimización de procesos de
                  gestión, identificación digital y firma electrónica. Con una sólida
                  presencia en Latinoamérica, ofrecemos soluciones tecnológicas
                  adaptadas a las necesidades de nuestros clientes, garantizando
                  seguridad, eficiencia y confianza en todos sus procesos
                </p>
                <p className="description-text">
                  Nos enorgullece ofrecer nuestras soluciones en Perú, un país clave
                  en la transformación digital de Latinoamérica. Con nuestra presencia
                  y acreditación local, ayudamos a las empresas peruanas a optimizar
                  sus procesos de forma segura, confiable y eficiente.
                </p>
              </section>

              <section className="info-section">
                <h2>Misión</h2>
                <div className="blue-line"></div>
                <p className="description-text">
                  Ayudar a nuestros clientes a modelar, implementar, gestionar y
                  optimizar sus procesos de negocio y operativos, relacionados con
                  documentación y firma electrónica que permitan generar valor con
                  confianza y seguridad.
                </p>
              </section>

              <section className="info-section">
                <h2>Visión</h2>
                <div className="blue-line"></div>
                <p className="description-text">
                  Ser una empresa posicionada en el mercado por su profesionalismo,
                  confiabilidad, seguridad y permanente innovación, aportando
                  soluciones efectivas, valor sustentable y satisfacción a las
                  necesidades de los clientes.
                </p>
              </section>
            </div>
          </>
      ),
    },
    {
      id: 2,
      name: 'Certificados digitales',
      description: (
          <>
            <div className="columns-container">
              {/* Columna 1 */}
              <div className="column">
                <h4>Para ciudadanos</h4>
                <ul>
                  <li><a href={"#persona-natural"} onClick={(e) => handleSpecificTopicClick(e, 'persona-natural')}>Persona natural</a></li>
                </ul>
              </div>
              {/* Columna 2 */}
              <div className="column">
                <h4>Para empresas</h4>
                <ul>
                  <li><a href={"#representante-legal"}  onClick={(e) => handleSpecificTopicClick(e, 'representante-legal')}>Representante legal</a></li>
                  <li><a href={"#empleado"}  onClick={(e) => handleSpecificTopicClick(e, 'empleado')}>Empleado</a></li>
                  <li><a href={"#empleado"}  onClick={(e) => handleSpecificTopicClick(e, 'empleado')}>Agente automatizado</a></li>
                </ul>
              </div>
              {/* Columna 3 */}
              <div className="column">
                <h4>Para profesionales</h4>
                <ul>
                  <li><a href={"#abogado"}  onClick={(e) => handleSpecificTopicClick(e, 'abogado')}>Abogado</a></li>
                  <li><a href={"#contador"}  onClick={(e) => handleSpecificTopicClick(e, 'contador')}>Contador</a></li>
                  <li><a href={"#medico"}  onClick={(e) => handleSpecificTopicClick(e, 'medico')}>Médico</a></li>
                  <li><a href={"#otros-profesionales"}  onClick={(e) => handleSpecificTopicClick(e, 'otros-profesionales')}>Otros profesionales</a></li>
                </ul>
              </div>
            </div>
          </>
      ),
    },
    {
      id: 2,
      name: 'Firma remota',
      description: (
          <>
            <div className="columns-container">
              <p className={"descripcion-submenu"}>
                Facilitamos la firma de documentos a distancia mediante plataformas seguras, lo que permite la validación jurídica de acuerdos y contratos sin necesidad de presencia física. Optimiza tiempos, reduce costos y mejora la eficiencia operativa.
              </p>
            </div>
          </>
      ),
    },
    {
      id: 2,
      name: 'Sellos de tiempo',
      description: (
          <>
            <div className="columns-container">
              <p className={"descripcion-submenu"}>
                Garantizamos la integridad y autenticidad de documentos digitales mediante sellos de tiempo, protegiendo la información contra alteraciones y asegurando su validez a largo plazo en entornos electrónicos.
              </p>
            </div>
          </>
      ),
    },
    {
      id: 2,
      name: 'Acreditaciones',
      description: (
          <>
            <div className="columns-container">
              <div className="column">
                <h4>Acreditaciones</h4>
                <ul>
                  <li><a href={"/docs/111-AcreditaciónECdeBPO.pdf"} target={"_blank"}>Entidad de Certificación</a></li>
                <li><a href={"/docs/RESOLUCION 125-AcreditacionTSABPO[F] .pdf"} target={"_blank"}>Sello de Tiempo</a></li>
                <li><a href={"/docs/01-Politica-y-Declaracion-de-Practicas-SVA-de-BPO.pdf"} target={"_blank"}>Servicio de Valor Añadido</a></li>
              </ul>
            </div>
            {/* Columna 2 */}
            <div className="column">
              <h4>Reconocimiento</h4>
              <ul>
                <li><a href={"/docs/360- AcreditaciónFRemotadeBPO.pdf"} target={"_blank"}>Firma remota</a></li>
              </ul>
            </div>

          </div>
        </>
      ),
    },
    {
      id: 2,
      name: 'Repositorio',
      description: (
          <>
            <div className="columns-container">
              <div className="column">
                <h4>Entidad de Certificación</h4>
                <ul>
                  <li><a href={"/docs/01-Politica-y-Declaración-de-Practicas-de-Certificacion-de-BPO.pdf"} target={"_blank"}>Política y Declaración de Prácticas</a></li>
                  <li><a href={"/docs/02-Politica-y-Plan-de-Seguridad-de-Informacion-EC-de-BPO.pdf"} target={"_blank"}>Política y Plan de Seguridad</a></li>
                  <li><a href={"/docs/03-Politica-y-Plan-de-Privacidad-EC-y-TSA-de-BPO.pdf"} target={"_blank"}>Política de Privacidad</a></li>
                </ul>
              </div>
              {/* Columna 2 */}
              <div className="column">
                <h4>Autoridad de Sellado de Tiempo</h4>
                <ul>
                  <li><a href={"/docs/01-Politica-y-Declaracion-de-Practicas-SVA-de-BPO.pdf"} target={"_blank"}>Política y Declaración de Prácticas</a></li>
                  <li><a href={"/docs/02-Politica-y-Plan-de-Seguridad-de-Informacion-EC-de-BPO.pdf"} target={"_blank"}>Política y Plan de Seguridad</a></li>
                  <li><a href={"/docs/03-Politica-y-Plan-de-Privacidad-EC-y-TSA-de-BPO.pdf"} target={"_blank"}>Política de Privacidad</a></li>
                </ul>
              </div>
            </div>
          </>
      ),
    },
    {
      id: 3,
      name: 'Identificación digital',
      description: (
          <>
            <div className="columns-container">
              <p className={"descripcion-submenu"}>
                Implementamos soluciones avanzadas para autenticar y verificar la identidad de personas en entornos digitales, asegurando procesos de validación rápidos, seguros y fáciles de integrar en cualquier plataforma.
              </p>
            </div>
          </>
      ),
    },
    {
      id: 3,
      name: 'Procesos de negocio',
      description: (
          <>
            <div className="columns-container">
              <p className={"descripcion-submenu"}>
                Plataformas y herramientas para digitalizar, firmar e integrar procesos de negocio sin complicaciones. Te ofrecemos herramientas para automatizar y mejorar la gestión de documentación.
              </p>

            </div>
          </>
      ),
    },
    {
      id: 4,
      name: 'Sobre nosotros',
      description: (
          <>
            <div className="columns-container">
              <p className={"descripcion-submenu"}>
                BPO IDOK es una empresa líder en la optimización de procesos de gestión, identificación digital y firma electrónica. Con una sólida presencia en Latinoamérica, ofrecemos soluciones tecnológicas adaptadas a las necesidades de nuestros clientes, garantizando seguridad, eficiencia y confianza en todos sus procesos.
              </p>

            </div>
          </>
      ),
    },
    {
      id: 4,
      name: 'Contáctanos',
      description: (
          <>
            <div className="columns-container contacto-menu">
              <p className={"descripcion-submenu"}>
                Agenda una cita con nosotros para conocer más sobre nuestros servicios.
              </p>
              <button className={"boton-agenda"}>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cecilia.obando@idok.cl" target="_blank" rel="noopener noreferrer">Agenda Ahora</a>
              </button>
            </div>
          </>
      ),
    },
  ];


  // Función que se llama cada vez que el usuario hace scroll
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);  // Si se hizo scroll hacia abajo más de 50px, mostramos el logo scroll
      setHasScrolled(true)
    } else {
      setScrolled(false); // Si estamos en la parte superior, mostramos el logo inicial
      setHasScrolled(false);
    }
  };

  // Usamos useEffect para agregar el listener de scroll cuando el componente se monta
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpiamos el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para actualizar el servicio seleccionado
  const handleServiceClick = (service) => {
    setSelectedService(service);  // Actualiza el servicio seleccionado
    setActiveService(service.name); // Marca el servicio como activo
  };

  // Función para manejar el mouse enter
  const handleMouseEnter = (menuId) => {
    setActiveMenuItem(menuId); // Establece el id del menú que está activo
    setIsMenuVisible(true);
    setSelectedService(null);
  };

  const handleMouseLeave = () => {
    setIsMenuVisible(false);  // Ocultar el submenú al quitar el ratón
  };

  // Función para alternar la visibilidad de la lista de países
  // const toggleCountriesList = () => {
  //   setIsCountriesVisible(!isCountriesVisible);
  // };

  // Nueva función para manejar el clic en "Ver más"
  const handleVerMasClick = (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del enlace

    if (selectedService) {
      if (selectedService.name === 'Sobre nosotros') {
        // Si es "Sobre nosotros", activamos específicamente el menú 1
        handleMouseEnter(1);
        setActiveMenuItem(1);

        // Si ya tienes un topic específico para "Nosotros", actívalo
        // Por ejemplo, si "Nosotros" corresponde al topic ID 0
        activateTopic(0);

      } else if (serviceToTopicMap[selectedService.name]) {
        // Para otros servicios, activamos el topic correspondiente
        activateTopic(serviceToTopicMap[selectedService.name]);
      }
    }
  };

  // Nueva función para manejar clics en enlaces específicos de certificados
  const handleSpecificTopicClick = (e, slug) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del enlace

    const mapping = serviceToTabMap[slug];
    if (mapping) {
      // Activar el topic específico con la pestaña correspondiente
      activateTopic(mapping.topicId, mapping.tabIndex);
      // Cerrar el menú
      setIsMenuVisible(false);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isMenuVisible ? 'visible' : ''}`}
    onMouseLeave={handleMouseLeave}
    >

      <div className="logo-container">
        {/* Cambiamos la imagen según el estado del scroll */}
        <img
            src={"idok-logo.png"}
            alt="Logo"
            className="logo"
            onClick={deactivateTopic}  // Esta función ahora iniciará la transición de fade out
            style={{cursor: 'pointer'}}
        />
      </div>

      {scrolled && (  // Solo mostramos el menú cuando hay scroll
          <nav className="navbar">
            <ul>
              <li
                  className={`nav-item ${activeMenuItem === 1 ? 'active' : ''}`}
                  onMouseEnter={() => handleMouseEnter(1)}
              ><a href="#servicios">Nosotros</a>
            </li>
            <li
               className={`nav-item ${activeMenuItem === 2 ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(2)}
            ><a href="#servicios">Servicios digitales <img src={"icono-flecha.png"} className={"flecha"}/></a>
            </li>
            <li
                className={`nav-item ${activeMenuItem === 3 ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(3)}
            ><a href="#servicios">Soluciones <img src={"icono-flecha.png"} className={"flecha"}/></a>
            </li>
            <li
                className={`nav-item ${activeMenuItem === 4 ? 'active' : ''}`}
               onMouseEnter={() => handleMouseEnter(4)}
            ><a href="#servicios">Más <img src={"icono-flecha.png"} className={"flecha"}/></a>
            </li>
            {/*<li*/}
            {/*   className={`nav-item ${activeMenuItem === 5 ? 'active' : ''}`}*/}
            {/*  onMouseEnter={() => handleMouseEnter(5)}*/}
            {/*><a href="#mas">Más</a></li>*/}
          </ul>
        </nav>
      )}
      {/*scrolled && (
        <div  onClick={toggleCountriesList}>
          <div className="pais-section">
          <i className="fas fa-globe"></i>
          <i className="fas fa-chevron-down"></i>
          </div>

      {isCountriesVisible && (
        <ul className="countries-list">
          <li>Argentina</li>
          <li>Chile</li>
          <li>Colombia</li>
          <li>México</li>
          <li>Perú</li>
        </ul>
      )}
        </div>
      )*/}



      {/* Contenedor para las dos columnas */}
      <div className={`container-menu ${activeMenuItem !== 1 ? 'expanded' : ''}`}>
        {activeMenuItem !== 1 && (<div className="option-menu">
          <ul>
            {services.map((service) => (

                <li className={`${service.id} ${activeMenuItem === service.id ? 'active' : ''}`}
                    key={service.id}>
                  <a
                      onClick={() => handleServiceClick(service)}
                      className={activeService === service.name ? 'active' : ''} // Agrega la clase 'active'
                  >
                    {service.name}
                  </a>
                </li>
            ))}
          </ul>
        </div>)}


        <div className={activeMenuItem === 1 ? "" : "content-option"}>
          {activeMenuItem === 1 ? (
              <div className="nosotros-content">
                {services.find(service => service.id === 1 && service.name === 'Beneficios')?.description}
              </div>
          ) : (
              selectedService ? (
                  <>
                    <h3 id={selectedService.name.toLowerCase().replace(/\s+/g, '-')}>{selectedService.name}</h3>
                    <p>{selectedService.description}</p>
                    <a href="#vermas" className="ver-mas-link" onClick={handleVerMasClick}>
                      Ver más <img src={"./flecha-ver-mas.png"} className={"flecha-ver-mas"} />
                    </a>
                  </>
              ) : (
                  <p className={"placeholder-text"}>Selecciona una opción para ver más detalles.</p>
              )
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
