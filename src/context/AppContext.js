import React, { createContext, useState, useRef } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Estado para almacenar el servicio seleccionado que se mostrará en Home
    const [activeTopicId, setActiveTopicId] = useState(null);

    // Estado para controlar si se ha hecho scroll
    const [hasScrolled, setHasScrolled] = useState(false);

    // Estado para controlar si se debe mostrar el detalle en Home
    const [showTopicDetail, setShowTopicDetail] = useState(false);

    // Nuevo estado para manejar la pestaña activa
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    // Referencia para controlar si hay una transición en curso
    const isTransitioning = useRef(false);

    // Función para activar un topic específico en Home
    const activateTopic = (topicId, tabIndex = 0) => {
        setActiveTopicId(topicId);
        setActiveTabIndex(tabIndex); // Establecer la pestaña activa
        setShowTopicDetail(true);
        setHasScrolled(true);
    };

    // Función para desactivar la visualización del topic
    // Esta función ahora solo cambia el estado showTopicDetail
    // La lógica de transición se maneja en el componente Home
    const deactivateTopic = () => {
        if (isTransitioning.current) return;

        isTransitioning.current = true;

        // Primero cambiamos el showTopicDetail para iniciar la animación en Home
        setShowTopicDetail(false);

        // Después de que termine la transición (2 segundos), limpiamos el activeTopicId
        setTimeout(() => {
            // Reestablecemos el estado de transición
            isTransitioning.current = false;
            setActiveTabIndex(0); // Resetear la pestaña activa
        }, 2000);
    };

    // Valores y funciones que queremos compartir entre componentes
    const contextValue = {
        activeTopicId,
        hasScrolled,
        showTopicDetail,
        activeTabIndex,
        setHasScrolled,
        setActiveTabIndex,
        activateTopic,
        deactivateTopic
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};