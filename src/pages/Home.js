// src/pages/Home.js
import React, { useEffect, useContext, useState } from 'react';
import './Home.css';
import { AppContext } from '../context/AppContext';
import topicServices from "../data/topicContent";

const Home = () => {
    const { hasScrolled, activeTopicId, showTopicDetail, deactivateTopic } = useContext(AppContext);

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    // Función para cambiar la pestaña activa
    const handleTabClick = (index) => {
        setActiveTabIndex(index);
    };

    // Reiniciamos la pestaña activa cuando cambia el topic
    useEffect(() => {
        setActiveTabIndex(0);
    }, [activeTopicId]);

    // Función para obtener las pestañas según el topic activo
    const getActiveTabs = () => {
        const activeTopic = topicServices.find(topic => topic.id === activeTopicId);
        return activeTopic ? activeTopic.tabs : [];
    };

    // Función para renderizar el detalle del topic
    const renderTopicDetail = (topic) => {
        return (
            <div className="container-detail">
                <div className='first-section'>
                    <div className='left-side'>
                        <h3>{topic.title}</h3>
                        <p>{topic.description}</p>
                        <button>Agendar una cita con ventas</button>
                    </div>
                    <div className='right-side'>
                        <img src='/imagenHomePeru.jpg' alt={topic.title} />
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
                    </div>
                </div>
            </div>
        );
    };

    // Función para obtener el topic activo
    const getActiveTopic = () => {
        return topicServices.find(topic => topic.id === activeTopicId);
    };

    return (
        <div className={`home ${hasScrolled && showTopicDetail ? 'show-topic-detail' : ''}`}>
            {hasScrolled && showTopicDetail && getActiveTopic() ? (
                <div className="topic-detail-overlay">
                    {renderTopicDetail(getActiveTopic())}
                </div>
            ) : (
                // Contenido normal de Home cuando no hay un topic activo o no hay scroll
                <div className="home-image">
                    {/* La imagen se establece mediante CSS */}
                </div>
            )}
        </div>
    );
};

export default Home;