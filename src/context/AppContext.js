// src/context/AppContext.js
import React, { createContext, useState } from 'react';

// Creamos un contexto para compartir datos entre componentes
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Estado para almacenar el servicio seleccionado que se mostrará en Home
    const [activeTopicId, setActiveTopicId] = useState(null);

    // Estado para controlar si se ha hecho scroll
    const [hasScrolled, setHasScrolled] = useState(false);

    // Estado para controlar si se debe mostrar el detalle en Home
    const [showTopicDetail, setShowTopicDetail] = useState(false);

    // Función para activar un topic específico en Home
    const activateTopic = (topicId) => {
        setActiveTopicId(topicId);
        setShowTopicDetail(true);

        // No hacemos scroll aquí para mantener la posición actual
        // Solo aseguramos que hasScrolled esté en true para que se muestre el detalle
        setHasScrolled(true);
    };

    // Función para desactivar la visualización del topic
    const deactivateTopic = () => {
        setShowTopicDetail(false);
    };

    // Valores y funciones que queremos compartir entre componentes
    const contextValue = {
        activeTopicId,
        hasScrolled,
        showTopicDetail,
        setHasScrolled,
        activateTopic,
        deactivateTopic
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};