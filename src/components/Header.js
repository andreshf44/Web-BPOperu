import React, { useState, useEffect } from 'react';
import './Components.css';  // Importamos los estilos de Header

const Header = () => {
  const [scrolled, setScrolled] = useState(false); // Estado para saber si hemos hecho scroll
  const [selectedService, setSelectedService] = useState(null); // Estado para almacenar el servicio seleccionado
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Estado para controlar la visibilidad del menu
  const [activeService, setActiveService] = useState(null); // Para gestionar el servicio activo
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [isCountriesVisible, setIsCountriesVisible] = useState(false);// Estado para manejar la visibilidad de la lista de países

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
                  <li><a href={"./Placeholder-PDF.pdf"} target={"_blank"}>Persona natural</a></li>
                </ul>
              </div>
              {/* Columna 2 */}
              <div className="column">
                <h4>Para empresas</h4>
                <ul>
                  <li><a href={"./Placeholder-PDF.pdf"} target={"_blank"}>Representante legal</a></li>
                  <li><a href={"./Placeholder-PDF.pdf"} target={"_blank"}>Empleado</a></li>
                  <li><a href={"./Placeholder-PDF.pdf"} target={"_blank"}>Agente automatizado</a></li>
                </ul>
              </div>
              {/* Columna 3 */}
              <div className="column">
                <h4>Para profesionales</h4>
                <ul>
                  <li><a href={"./Placeholder-PDF.pdf"} target={"_blank"}>Abogado</a></li>
                  <li><a href={"./Placeholder-PDF.pdf"} target={"_blank"}>Contador</a></li>
                  <li><a href={"./Placeholder-PDF.pdf"} target={"_blank"}>Médico</a></li>
                  <li><a href={"./Placeholder-PDF.pdf"} target={"_blank"}>Otros profesionales</a></li>
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
                <li><a href={"./Placeholder-PDF.pdf"} target={"_blank"}>Entidad de Certificación</a></li>
                <li><a href={"./Placeholder-PDF.pdf"} target={"_blank"}>Sello de Tiempo</a></li>
                <li><a href={"./Placeholder-PDF.pdf"} target={"_blank"}>Servicio de Valor Añadido</a></li>
              </ul>
            </div>
            {/* Columna 2 */}
            <div className="column">
              <h4>Reconocimiento</h4>
              <ul>
                <li><a href={"./Placeholder-PDF.pdf"} target={"_blank"}>Firma remota</a></li>
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
                  <li><a href={"./Placeholder-PDF.pdf"} target={"_blank"}>Política y Declaración de Prácticas</a></li>
                  <li><a href={"./Placeholder-PDF.pdf"} target={"_blank"}>Política y Plan de Seguridad</a></li>
                  <li><a href={"./Placeholder-PDF.pdf"} target={"_blank"}>Política de Privacidad</a></li>
                </ul>
              </div>
              {/* Columna 2 */}
              <div className="column">
                <h4>Autoridad de Sellado de Tiempo</h4>
                <ul>
                  <li><a href={"./Placeholder-PDF.pdf"} target={"_blank"}>Política y Declaración de Prácticas</a></li>
                  <li><a href={"./Placeholder-PDF.pdf"} target={"_blank"}>Política y Plan de Seguridad</a></li>
                  <li><a href={"./Placeholder-PDF.pdf"} target={"_blank"}>Política de Privacidad</a></li>
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
          </div>
        </>
      ),
    },
    {
      id: 3,
      name: 'FirmaYa',
      description: (
        <>
          <div className="columns-container">
          </div>
        </>
      ),
    },
    {
      id: 3,
      name: 'Gestor documental',
      description: (
          <>
            <div className="columns-container">
            </div>
          </>
      ),
    },
    {
      id: 4,
      name: 'Noticias',
      description: (
          <>
            <div className="columns-container">
            </div>
          </>
      ),
    },
    {
      id: 4,
      name: 'Contáctanos',
      description: (
          <>
            <div className="columns-container">
            </div>
          </>
      ),
    },
  ];

  // Función que se llama cada vez que el usuario hace scroll
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);  // Si se hizo scroll hacia abajo más de 50px, mostramos el logo scroll
    } else {
      setScrolled(false); // Si estamos en la parte superior, mostramos el logo inicial
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
  const toggleCountriesList = () => {
    setIsCountriesVisible(!isCountriesVisible);
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
                    <h3>{selectedService.name}</h3>
                    <p>{selectedService.description}</p>
                    <a href="#vermas" className="ver-mas-link">
                      Ver más <span>&#8594;</span>
                    </a>
                  </>
              ) : (
                  <p>Selecciona una opción para ver más detalles.</p>
              )
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
