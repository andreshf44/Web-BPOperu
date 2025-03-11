// src/data/topicContent.js
import React from 'react';

export const certificadosContent = [
    {
        title: "Descripción",
        content: "Emitimos certificados digitales de acuerdo al perfil y necesidad de cada persona: Personas naturales, Personas jurídicas y Profesionales. La vigencia de cada certificado puede ser de 01, 02 o 03 años. Navega entre los diferentes tipos de certificados que ofrecemos y encuentra el tuyo."
    },
    {
        title: "Persona natural",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        title: "Representante legal",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        title: "Empleado o funcionario",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        title: "Profesional o colegiado",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        title: "Factura Electrónica",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
];

export const firmaContent = [
    {
        title: "Descripción",
        content: "Facilitamos la firma de documentos a distancia mediante plataformas seguras, lo que permite la validación jurídica de acuerdos y contratos sin necesidad de presencia física. Optimiza tiempos, reduce costos y mejora la eficiencia operativa."
    },
    {
        title: "Beneficios",
        content: (
            <ul>
                <li><span>Flexibilidad</span>: Firma desde cualquier lugar y en cualquier momento.</li>
                <li><span>Eficiencia</span>: Reduce tiempo y esfuerzo al firmar documentos.</li>
                <li><span>Reduccion de costos</span>: Reduce los costos asociados con el envío y el almacenamiento de documentos y dispositivos de firma</li>
                <li><span>Accesibilidad</span>: Promueve la accesibilidad para personas con dificultades de acceder a firmas tradicionales.</li>
            </ul>
        )
    }
];

export const sellosContent = [
    {
        title: "Descripción",
        content: "Garantizamos la integridad y autenticidad de documentos digitales mediante sellos de tiempo, protegiendo la información contra alteraciones y asegurando su validez a largo plazo en entornos electrónicos."
    },
    {
        title: "Beneficios",
        content: (
            <ul>
                <li><span>Trazabilidad</span>: Registro de hora y fecha exactas en que se realizaron las transacciones o
                    eventos.
                </li>
                <li><span>Protección</span>: Protege transacciones y eventos contra manipulación de datos.
                </li>
                <li><span>Uso de aplicaciones y servicios</span>: Los sellos de tiempo son ideales para aplicaciones y
                    servicios especiales en las que la exactitud de hora y fecha exactas de las transacciones o eventos
                    son críticas.
                </li>
            </ul>
        )
    }
]

export const acreditacionesContent = [
    {
        title: "Descripción",
        content: "Nuestros certificados digitales de firma avanzada, firma remota y sellos de tiempo cumplen con todos los requisitos de seguridad exigidos por la normativa local y se encuentran alineados a estándares internacionales. Asimismo, se encuentran dentro del alcance de acreditación del INDECOPI."
    },
    {
        title: "Entidad de Certificación",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        title: "Sellado de Tiempo",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        title: "Servicio de Valor Añadido",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        title: "Firma Remota",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },

]

export const repositorioContent = [
    {
        title: "Entidad de Certificación",
        content: (
            <ul>
                <li>
                    <img
                        src={"pdf_logo.png"}
                        alt="PDF"
                        className="pdf-logo"
                    />
                    <a
                    href={"https://bpoperu.idok.cl/wordpress/wp-content/uploads/2024/02/EC/01-Politica-y-Declaraci%C3%B3n-de-Practicas-de-Certificacion-de-BPO.pdf"}
                    target={"_blank"}>Política y Declaración de Prácticas</a></li>
                <li>
                    <img
                        src={"pdf_logo.png"}
                        alt="PDF"
                        className="pdf-logo"
                    />
                    <a
                    href={"https://bpoperu.idok.cl/wordpress/wp-content/uploads/2024/02/EC/02-Politica-y-Plan-de-Seguridad-de-Informacion-EC-de-BPO.pdf"}
                    target={"_blank"}>Política y Plan de Seguridad</a></li>
                <li>
                    <img
                        src={"pdf_logo.png"}
                        alt="PDF"
                        className="pdf-logo"
                    />
                    <a
                        href={"https://bpoperu.idok.cl/wordpress/wp-content/uploads/2024/02/EC/03-Politica-y-Plan-de-Privacidad-EC-y-TSA-de-BPO.pdf"}
                        target={"_blank"}>Política de Privacidad</a></li>
            </ul>
        )
    },
    {
        title: "Sellado de Tiempo",
        content: (
            <ul>
                <li>
                    <img
                        src={"pdf_logo.png"}
                        alt="PDF"
                        className="pdf-logo"
                    />
                    <a
                        href={"https://bpoperu.idok.cl/wordpress/wp-content/uploads/2024/02/TSA/01-Politica-y-Declaracion-de-Practicas-SVA-de-BPO.pdf"}
                        target={"_blank"}>Política y Declaración de Prácticas</a></li>
                <li>
                    <img
                        src={"pdf_logo.png"}
                        alt="PDF"
                        className="pdf-logo"
                    />
                    <a
                        href={"https://bpoperu.idok.cl/wordpress/wp-content/uploads/2024/02/EC/02-Politica-y-Plan-de-Seguridad-de-Informacion-EC-de-BPO.pdf"}
                        target={"_blank"}>Política y Plan de Seguridad</a></li>
                <li>
                    <img
                        src={"pdf_logo.png"}
                        alt="PDF"
                        className="pdf-logo"
                    />
                    <a
                        href={"https://bpoperu.idok.cl/wordpress/wp-content/uploads/2024/02/EC/03-Politica-y-Plan-de-Privacidad-EC-y-TSA-de-BPO.pdf"}
                        target={"_blank"}>Política de Privacidad</a></li>
            </ul>
        )
    },
    {
        title: "Firma Remota",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
]

export const identificacionDigitalContent = [
    {
        title: "Descripción",
        content: "Implementamos soluciones avanzadas para autenticar y verificar la identidad de personas en entornos digitales, asegurando procesos de validación rápidos, seguros y fáciles de integrar en cualquier plataforma."
    },
    {
        title: "Beneficios",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

export const certificadosTabs = certificadosContent.map(item => item.title);
export const firmaTabs = firmaContent.map(item => item.title);
export const sellosTabs = sellosContent.map(item => item.title);
export const acreditacionesTabs = acreditacionesContent.map(item => item.title);
export const repositorioTabs = repositorioContent.map(item => item.title);
export const identificacionDigitalTabs = identificacionDigitalContent.map(item => item.title);

export const topicServices = [
    {
        id: 1,
        title: "Certificados Digitales",
        description: "Proporcionamos distintos tipo de certificados digitales, asegurando la validez legal y la protección de tus documentos firmados electrónicamente. Garantizamos cumplimiento normativo y seguridad en cada transacción digital.",
        tabs: certificadosTabs,
        content: certificadosContent
    },
    {
        id: 2,
        title: "Firma remota",
        description: "Facilitamos la firma de documentos a distancia mediante plataformas seguras, lo que permite la validación juridica de acuerdos y contratos sin necesidad de presencia física. Optimiza tiempos, reduce costos y mejora la eficiencia operativa.",
        tabs: firmaTabs,
        content: firmaContent
    },
    {
        id: 3,
        title: "Sellos de tiempo",
        description: "Garantizamos la integridad y autenticidad de documentos digitales mediante sellos de tiempo, protegiendo la información contra alteraciones y asegurando su validez a largo plazo en entornos electrónicos.",
        tabs: sellosTabs,
        content: sellosContent
    },
    {
        id: 4,
        title: "Acreditaciones",
        description: "Nuestros certificados digitales de firma avanzada, firma remota y sellos de tiempo cumplen con todos los requisitos de seguridad exigidos por la normativa local y se encuentran alineados a estándares internacionales. Asimismo, se encuentran dentro del alcance de acreditación del INDECOPI.",
        tabs: acreditacionesTabs,
        content: acreditacionesContent
    },
    {
        id: 5,
        title: "Repositorio",
        description: "Encuentras nuestras políticas y prácticas que dirigen nuestras operaciones como prestadores de servicios digitales. Esta información siempre se encuentra disponible y actualizada para todos nuestros usuarios",
        tabs: repositorioTabs,
        content: repositorioContent
    },
    {
        id: 6,
        title: "Identificación digital",
        description: "Implementamos soluciones avanzadas para autenticar y verificar la identidad de personas en entornos digitales, asegurando procesos de validación rápidos, seguros y fáciles de integrar en cualquier plataforma.",
        tabs: identificacionDigitalTabs,
        content: identificacionDigitalContent
    }
];

export default topicServices;