// src/pages/Home.js
import React, { useEffect, useContext, useState } from 'react';
import './Home.css';
import { AppContext } from '../context/AppContext';
import topicServices from "../data/topicContent";
import HomeContent from '../components/HomeContent';

const Home = () => {
    const {
        hasScrolled,
        activeTopicId,
        showTopicDetail,
        activeTabIndex,
        setActiveTabIndex
    } = useContext(AppContext);

    const [isTopicFadingOut] = useState(false);

    // Función para cambiar la pestaña activa
    const handleTabClick = (index) => {
        setActiveTabIndex(index);
    };

    // Reiniciamos la pestaña activa cuando cambia el topic
    useEffect(() => {
        setActiveTabIndex(0);
    }, [activeTopicId, setActiveTabIndex]);

    // Función para renderizar el detalle del topic
    const renderTopicDetail = (topic) => {
        const topicSlug = topic.title.toLowerCase().replace(/\s+/g, '-');
        return (
            <div className="container-detail" id={topicSlug}>
                <div className='first-section'>
                    <div className='left-side'>
                        <h3>{topic.title}</h3>
                        <p>{topic.description}</p>
                        <button><a href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@idok.pe" target="_blank" rel="noopener noreferrer" >Agendar una cita con ventas</a></button>
                    </div>
                    <div className='right-side'>
                        <img src={topic.img} alt={topic.title}/>
                    </div>
                </div>
                <div className='second-section'>
                    <div className='left-side'>
                        <ul>
                            {topic.tabs.map((tab, index) => (
                                <li
                                    key={index}
                                    style={{
                                        borderLeft: activeTabIndex === index ? '4px solid #4B69B2' : '4px solid #D6D6D6',
                                        color: activeTabIndex === index ? '#000000' : '#5F5F5F',
                                        fontWeight: activeTabIndex === index ? 'bold' : 'normal'
                                    }}
                                    onClick={() => handleTabClick(index)}
                                >
                                    {tab}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='right-side'>
                        {/* Ordenamos el contenido para que el activo aparezca primero */}
                        {[...topic.content]
                            .sort((a, b) =>
                                a.title === topic.tabs[activeTabIndex] ? -1 :
                                    b.title === topic.tabs[activeTabIndex] ? 1 : 0
                            )
                            .map((item, index) => (
                                <div className='information' key={index}>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            ))
                        }

                        {topic.buttonComponent && (
                            <div className='information button-container'>
                                {topic.buttonComponent}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    // Función para obtener el topic activo
    const getActiveTopic = () => {
        return topicServices.find(topic => topic.id === activeTopicId);
    };

    /*const handleTopicClose = () => {
        if (showTopicDetail) {
            setIsTopicFadingOut(true);
            // Esperamos a que termine la animación antes de ocultar realmente el topic
            setTimeout(() => {
                setIsHomeImageVisible(true);
                deactivateTopic();
            }, 1000);
        }
    };*/

    useEffect(() => {
        if (showTopicDetail && activeTopicId) {
            const activeTopic = topicServices.find(
                topic => topic.id === activeTopicId
            );
            if (activeTopic) {
                // Actualiza la URL con el slug del tema activo (convertido a minúsculas y con guiones)
                const slug = activeTopic.title.toLowerCase().replace(/\s+/g, '-');
                window.history.replaceState(null, '', `#${slug}`);
            }
        } else if (!showTopicDetail) {
            // Si no hay tema activo, elimina el hashtag
            window.history.replaceState(null, '', window.location.pathname);
        }
    }, [showTopicDetail, activeTopicId]);

    return (
        <div className={`home`}>
           
            <div className={`home-image ${hasScrolled ? 'fade-out-image' : 'fade-in-image'}`}></div>

            <div className={`home-content-wrapper ${hasScrolled ? 'md:fade-in-content' : 'md:fade-out-content'}`}>
                <HomeContent />
            </div>
            

            {/* Renderizamos el topic detail si está activo o está en transición de salida */}
            {hasScrolled && (showTopicDetail || isTopicFadingOut) && getActiveTopic() && (
                <div className={`topic-detail-overlay ${isTopicFadingOut ? 'fade-out' : ''}`}>
                    {renderTopicDetail(getActiveTopic())}
                </div>
            )}
        </div>
    );
};

export default Home;