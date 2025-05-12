// src/data/topicContent.js
import React from 'react';
import DemoButton from "../components/DemoButton";

export const certificadosContent = [
    {
        title: "Descripción",
        content: "Emitimos certificados digitales de acuerdo al perfil y necesidad de cada persona: Personas naturales, Personas jurídicas y Profesionales. La vigencia de cada certificado puede ser de 01, 02 o 03 años. Navega entre los diferentes tipos de certificados que ofrecemos y encuentra el tuyo."
    },
    {
        title: "Persona natural",
        content: (
            <>
                <p>Este certificado permite verificar tu identidad, realizar trámites y gestiones en línea de manera segura y confiable.<br /> Te presentamos algunas características clave de este tipo de certificado:</p>
                <ul>
                    <li>
                        <span>Seguridad y confiabilidad: </span>
                        Nuestros certificados digitales de persona natural ofrecen una capa adicional de seguridad y confiabilidad para tus trámites y gestiones en línea.
                    </li>
                    <li>
                        <span>Verificación de identidad: </span>
                        Con nuestro certificado digital, puedes verificar tu identidad de manera segura y confiable, lo que te permite acceder a servicios y realizar trámites en línea con total confianza.
                    </li>
                    <li><span>Facilidad de uso</span>: Nuestro certificado digital es fácil de usar y te permite realizar trámites y gestiones en línea de manera rápida y eficiente</li>
                    <li><span>Compatibilidad</span>: Nuestro certificado digital es compatible con una amplia variedad de sistemas y plataformas, lo que te permite utilizarlo en diferentes contextos y aplicaciones.</li>
                </ul>
            </>
        )
    },
    {
        title: "Representante legal",
        content: (
            <>
                <p>Este certificado permite verificar la identidad y autoridad del representante legal de una empresa o institución, para realizar trámites y gestiones en línea de manera segura y confiable.
                    <br/>
                    Te presentamos algunas características clave de este tipo de certificado:</p>
                <ul>
                    <li><span>Autenticidad y autoridad</span>: Nuestro certificado digital para representante legal es la herramienta perfecta para garantizar la autenticidad y la autoridad de los trámites y gestiones en línea de empresas e instituciones. Al verificar la identidad y la autoridad del representante legal, nuestro certificado digital proporciona una capa adicional de seguridad y confiabilidad.</li>
                    <li><span>Solución integral</span>: Nuestro certificado digital es una solución integral que te permite realizar trámites y gestiones en línea de manera segura, eficiente y confiable. Con nuestro certificado digital, puedes estar seguro de que tus acciones en línea son auténticas y autorizadas, lo que reduce el riesgo de fraudes y errores.</li>
                    </ul>
            </>
        )
    },
    {
        title: "Empleado o funcionario",
        content: (
            <>
                <p>Este certificado permite verificar la identidad del empleado o funcionario, y la relación laboral de esta persona con una empresa o institución, permitiéndole acceder a recursos y realizar tareas en línea de manera segura y controlada.
                    <br/>
                    Te presentamos algunas características clave de este tipo de certificado:</p>
                <ul>
                    <li><span>Firma digital con atributos</span>: Nuestro certificado digital permite firmar documentos con atributos específicos, como el cargo o la función del empleado o trabajador, lo que garantiza que la firma sea válida y reconocida.</li>
                    <li><span>Control de acceso</span>: Los administradores pueden controlar el acceso a los documentos y los atributos de firma para cada empleado o trabajador, lo que garantiza que se mantenga la seguridad y la integridad de la información.</li>
                </ul>
            </>
        )
    },
    {
        title: "Profesional o colegiado",
        content: (
            <>
                <p>Este certificado permite identificar y garantizar la calificación profesional de una persona, permitiéndole firmar documentos y realizar trámites en línea de forma confiable.
                    <br/>
                    Te presentamos algunas características clave de este tipo de certificado:</p>
                <ul>
                    <li><span>Firma digital con validez profesional</span>: Nuestro certificado digital para profesional te permite firmar documentos y realizar trámites con la validez y la credibilidad que requiere tu profesión.</li>
                    <li><span>Identificación y calificación verificadas</span>: Con nuestro certificado digital, tu identidad y calificación profesional son verificadas y autenticadas, lo que garantiza la autenticidad y la integridad de tus actuaciones profesionales.</li>
                </ul>
            </>
        )
    }

];

export const firmaContent = [
    {
        title: "Características",
        content: (
            <>
                <p>
                    Permite a clientes y colaboradores firmar documentos online sin desplazamientos, optimizando tiempos y costos.
                    <br/>
                    Las características principales de nuestra firma remota son:
                </p>

                <ul>
                    <li>Acceso desde cualquier dispositivo</li>
                    <li>Validación de identidad mediante OTP o biometría</li>
                    <li>Encriptación de datos para proteger la integridad de los documentos</li>
                </ul>
            </>
        )
    },
    {
        title: "Beneficios",
        content: (
            <ul>
                <li><span>Flexibilidad</span>: Firma desde cualquier lugar y en cualquier momento.</li>
                <li><span>Eficiencia</span>: Reduce tiempo y esfuerzo al firmar documentos.</li>
                <li><span>Reduccion de costos</span>: Reduce los costos asociados con el envío y el almacenamiento de documentos y dispositivos de firma</li>
                <li><span>Accesibilidad</span>: Promueve la accesibilidad para personas con dificultades de acceder a firmas tradicionales.</li>
                <li><span>Mayor conversión de clientes</span>: Elimina barreras de enrolamiento físico y facilita la adopción del servicio.</li>
                <li><span>Cierre inmediato de acuerdos</span>: Permite entregar productos y activar servicios desde el primer minuto.</li>
            </ul>
        )
    },
    {
        title: "Casos de uso",
        content: (
                <ul>
                    <li>Un cliente firma una póliza de seguro desde su celular en segundos.</li>
                    <li>Aprobación de contratos laborales sin necesidad de visitas presenciales.</li>
                    <li>Un comprador firma digitalmente un contrato de compraventa en una plataforma de comercio electrónico, reduciendo los tiempos de espera.</li>
                    <li>Una empresa de financiamiento digital permite a sus clientes aceptar y firmar electrónicamente acuerdos de pago en línea, acelerando la entrega de fondos.</li>
                </ul>
        )
    }
];

export const sellosContent = [
    {
        title: "Características",
        content: (
            <>
                <p>
                    Protege documentos con hora y fecha certificada. Las principales características de nuestros sellos de tiempo son:
                </p>

                <ul>
                    <li>Registro confiable de fecha y hora para documentos electrónicos.</li>
                    <li>Certificación de integridad contra alteraciones.</li>
                    <li>Compatible con normativas de firma digital.</li>
                </ul>
            </>
        )
    },
    {
        title: "Beneficios",
        content: (
            <ul>
                <li><span>Trazabilidad</span>: Registro de hora y fecha exactas en que se realizaron las transacciones o eventos.</li>
                <li><span>Protección</span>: Protege transacciones y eventos contra manipulación de datos</li>
                <li><span>Uso en aplicaciones y servicios</span>:  Los sellos de tiempo son ideales para aplicaciones y servicios especiales en las que la exactitud de hora y fecha exactas de las transacciones o eventos son críticas. Ideal para contratos, facturación electrónica y más.</li>
            </ul>
        )
    },
    {
        title: "Casos de uso",
        content: (
            <ul>
                <li>Empresas que garantizan la validez temporal de documentos electrónicos en auditorías.</li>
                <li>Proveedores de facturación electrónica que aseguran la integridad de sus registros fiscales.</li>
            </ul>
        )
    }
]

export const acreditacionesContent = [
    {
        title: "Entidad de Certificación",
        content:
            <>
                <p>
                    BPO Advisors como Entidad de Certificación es la responsable de emitir certificados digitales que
                    verifican la identidad y la autenticidad de las personas y las organizaciones. Asimismo, opera bajo
                    estrictos estándares de seguridad y confiabilidad, garantizando la validez y la integridad de los
                    certificados digitales que emite.
                    La Entidad de Certificación de BPO Advisors se encuentra acreditada por el INDECOPI, lo que
                    garantiza que nuestros servicios de certificación digital cumplen con los estándares de seguridad y
                    confiabilidad.
                    La Resolución de acreditación de nuestra Entidad de Certificación puede ser revisada en el siguiente
                    enlace:
                </p>
                <img
                    src={"pdf_logo.png"}
                    alt="PDF"
                    className="pdf-logo"
                />
                <a
                    href={"/docs/111-AcreditaciónECdeBPO.pdf"}
                    target={"_blank"}>Resolución de Acreditación Entidad de Certificación</a>
            </>
    },
    {
        title: "Sellado de Tiempo",
        content:
            <>
                <p>
                    Nuestra Autoridad de Sellado de Tiempo es la responsable de proporcionar sellos de tiempo seguros y confiables que permiten verificar la fecha y la hora de los documentos y las transacciones digitales.
                    BPO Advisors se encuentra acreditada como Autoridad de Sellado de Tiempo por el INDECOPI, lo que garantiza que nuestros sellos de tiempo cumplen con los estándares locales de seguridad y confiabilidad.
                    La Resolución de acreditación de la Autoridad de Sellado de Tiempo puede ser revisada en el siguiente enlace:
                </p>
                <img
                    src={"pdf_logo.png"}
                    alt="PDF"
                    className="pdf-logo"
                />
                <a
                    href={"/docs/RESOLUCION 125-AcreditacionTSABPO[F] .pdf"}
                    target={"_blank"}>Resolución de Acreditación Sello de Tiempo</a>
            </>
    },
    {
        title: "Firma Remota",
        content:
            <>
                <p>
                    El servicio de Firma Remota de BPO Advisors permite firmar desde cualquier lugar con total seguridad. Este servicio se encuentra alineado al estándar internacional CEN EN 419-221 (parte 5) y a lo dispuesto por la normativa local del INDECOPI, lo que garantiza que nuestros procesos y sistemas de firma remota cumplen con los requisitos de seguridad y confiabilidad más estrictos.
                    La Resolución de acreditación de nuestro servicio de Firma Remota puede ser revisada en el siguiente enlace:
                </p>
                <img
                    src={"pdf_logo.png"}
                    alt="PDF"
                    className="pdf-logo"
                />
                <a
                    href={"/docs/360- AcreditaciónFRemotadeBPO.pdf"}
                    target={"_blank"}>Resolución de Firma Remota</a>
            </>
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
                    href={"/docs/01-Politica-y-Declaración-de-Practicas-de-Certificacion-de-BPO.pdf"}
                    target={"_blank"}>Política y Declaración de Prácticas</a></li>
                <li>
                    <img
                        src={"pdf_logo.png"}
                        alt="PDF"
                        className="pdf-logo"
                    />
                    <a
                    href={"/docs/02-Politica-y-Plan-de-Seguridad-de-Informacion-EC-de-BPO.pdf"}
                    target={"_blank"}>Política y Plan de Seguridad</a></li>
                <li>
                    <img
                        src={"pdf_logo.png"}
                        alt="PDF"
                        className="pdf-logo"
                    />
                    <a
                        href={"/docs/03-Politica-y-Plan-de-Privacidad-EC-y-TSA-de-BPO.pdf"}
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
                        href={"/docs/01-Politica-y-Declaracion-de-Practicas-SVA-de-BPO.pdf"}
                        target={"_blank"}>Política y Declaración de Prácticas</a></li>
                <li>
                    <img
                        src={"pdf_logo.png"}
                        alt="PDF"
                        className="pdf-logo"
                    />
                    <a
                        href={"/docs/02-Politica-y-Plan-de-Seguridad-de-Informacion-EC-de-BPO.pdf"}
                        target={"_blank"}>Política y Plan de Seguridad</a></li>
                <li>
                    <img
                        src={"pdf_logo.png"}
                        alt="PDF"
                        className="pdf-logo"
                    />
                    <a
                        href={"/docs/03-Politica-y-Plan-de-Privacidad-EC-y-TSA-de-BPO.pdf"}
                        target={"_blank"}>Política de Privacidad</a></li>
            </ul>
        )
    },
    {
        title: "Firma Remota",
        content:
            "El servicio de Firma Remota de BPO Advisors permite firmar desde cualquier lugar con total seguridad. Este servicio se encuentra alineado al estándar internacional CEN EN 419-221 (parte 5) y a lo dispuesto por la normativa local del INDECOPI, lo que garantiza que nuestros procesos y sistemas de firma remota cumplen con los requisitos de seguridad y confiabilidad más estrictos."
    }
]

export const identificacionDigitalContent = [
    {
        title: "Características",
        content: (
            <>
                <p>
                    Tecnología avanzada para autenticar la identidad de las personas y evitar fraudes en transacciones electrónicas.
                    <br/>
                    Las características principales de este servicio son:
                </p>

                <ul>
                    <li>Autenticación biométrica (facial y dactilar).</li>
                    <li>Validación documental y cruce de datos con bases oficiales.</li>
                    <li>Análisis de riesgos y detección de fraude.</li>
                </ul>
            </>
        )
    },
    {
        title: "Beneficios",
        content: (
            <ul>
                <li><span>Identificación</span>:  Confirma eficazmente la identidad del firmante.</li>
                <li><span>Evita fraude</span>: Evita suplantaciones y fraudes.</li>
                <li><span>Integridad</span>: Conserva documentos de forma íntegra y auditada.</li>
            </ul>
        )
    },
    {
        title: "Casos de uso",
        content: (
            <ul>
                <li><span>Verificación de identidad de Banca en línea</span>:  Los bancos y las instituciones financieras utilizan nuestra solución de identificación digital para verificar la identidad de los clientes antes de aprobar un préstamo online, reduciendo el riesgo de fraude y asegurando la seguridad de las transacciones.</li>
                <li><span>Autenticación de usuarios en Fintech</span>:  Las empresas fintech utilizan nuestra solución de identificación digital para autenticar a los usuarios y prevenir fraudes en transacciones digitales, protegiendo a los clientes y a la empresa de posibles pérdidas financieras.</li>
            </ul>
        )
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
        content: certificadosContent,
        buttonComponent: <DemoButton />
    },
    {
        id: 2,
        title: "Firma remota",
        description: "Facilitamos la firma de documentos a distancia mediante plataformas seguras, lo que permite la validación juridica de acuerdos y contratos sin necesidad de presencia física. Optimiza tiempos, reduce costos y mejora la eficiencia operativa.",
        tabs: firmaTabs,
        content: firmaContent,
        buttonComponent: <DemoButton />
    },
    {
        id: 3,
        title: "Sellos de tiempo",
        description: "Garantizamos la integridad y autenticidad de documentos digitales mediante sellos de tiempo, protegiendo la información contra alteraciones y asegurando su validez a largo plazo en entornos electrónicos.",
        tabs: sellosTabs,
        content: sellosContent,
        buttonComponent: <DemoButton />
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
        content: identificacionDigitalContent,
        buttonComponent: <DemoButton />
    }
];

export default topicServices;