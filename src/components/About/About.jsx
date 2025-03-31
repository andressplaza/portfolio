import Carousel from '../shared/Carousel/Carousel';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired, faCogs, faDatabase, faServer, faBrain, faProjectDiagram, faTools, faVial } from '@fortawesome/free-solid-svg-icons';

const DEFAULT_ITEMS = [
  { id: 1, title: 'Arquitectura de Software', description: 'Diseño de sistemas escalables y mantenibles con principios sólidos', icon: <FontAwesomeIcon icon={faProjectDiagram} size="3x" /> },
  { id: 2, title: 'Optimización de Sistemas', description: 'Mejora del rendimiento y la eficiencia en aplicaciones y bases de datos', icon: <FontAwesomeIcon icon={faCogs} size="3x" /> },
  { id: 3, title: 'APIs y Conectividad', description: 'Desarrollo e integración de APIs REST, WebSockets y MCP para ecosistemas conectados', icon: <FontAwesomeIcon icon={faNetworkWired} size="3x" /> },
  { id: 4, title: 'Bases de Datos', description: 'Gestión, optimización y modelado de datos en entornos SQL y NoSQL', icon: <FontAwesomeIcon icon={faDatabase} size="3x" /> },
  { id: 5, title: 'Testing', description: 'Pruebas automatizadas, unitarias y de integración para asegurar calidad del software', icon: <FontAwesomeIcon icon={faVial} size="3x" /> },
  { id: 6, title: 'Inteligencia Artificial', description: 'Exploración de modelos de IA aplicados a automatización y análisis de datos', icon: <FontAwesomeIcon icon={faBrain} size="3x" /> },
  { id: 7, title: 'Patrones y Buenas Prácticas', description: 'Uso de POO, DDD, CQRS y otros enfoques para código robusto', icon: <FontAwesomeIcon icon={faTools} size="3x" /> }
];

const About = () => {
  return (
    <section id='about' className="about-container">
      <div className="about-content">
        <h2>Sobre mí</h2>
        <p>
          Soy un desarrollador de software especializado en el backend, centrado en la creación de sistemas escalables, seguros y eficientes. Me apasiona la optimización del rendimiento, la arquitectura de software y la integración de APIs.
        </p>
        <p>
          Trabajo con estructuras limpias, patrones de diseño y automatización de procesos para mejorar la estabilidad y el mantenimiento de los proyectos.
        </p>
        <p>
          También tengo interés en la Inteligencia Artificial y su aplicación en soluciones backend, así como en la evolución de las APIs MCP y su impacto en la conectividad digital.
        </p>
      </div>
      <div className="carousel-container">
        <Carousel
          items={DEFAULT_ITEMS}
          baseWidth={300}
          autoplay={false}
          pauseOnHover={true}
          loop={true}
          round={true}
        />
      </div>
    </section>
  );
};

export default About;
