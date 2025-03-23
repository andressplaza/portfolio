import Carousel from '../shared/Carousel/Carousel';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faReact, faShopify } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCubes, faServer, faTools } from '@fortawesome/free-solid-svg-icons';

const DEFAULT_ITEMS = [
  { id: 1, title: 'Laravel', description: 'Framework PHP para desarrollo backend robusto', icon: <FontAwesomeIcon icon={faLaravel} size="3x" /> },
  { id: 2, title: 'React.js', description: 'Biblioteca de JavaScript para interfaces dinámicas', icon: <FontAwesomeIcon icon={faReact} size="3x" /> },
  { id: 3, title: 'Shopify Development', description: 'Personalización de tiendas Shopify, desarrollo de temas y apps', icon: <FontAwesomeIcon icon={faShopify} size="3x" /> },
  { id: 4, title: 'Bases de Datos', description: 'Optimización y diseño de bases de datos SQL y NoSQL', icon: <FontAwesomeIcon icon={faDatabase} size="3x" /> },
  { id: 5, title: 'Arquitectura Hexagonal', description: 'Enfoque modular para sistemas escalables', icon: <FontAwesomeIcon icon={faCubes} size="3x" /> },
  { id: 6, title: 'DevOps y Entorno', description: 'Manejo de Docker, GitLab Pipelines e integración continua', icon: <FontAwesomeIcon icon={faServer} size="3x" /> },
  { id: 7, title: 'Patrones de Diseño', description: 'Aplicación de DDD, CQRS y principios SOLID en proyectos', icon: <FontAwesomeIcon icon={faTools} size="3x" /> }
];


const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h2>Sobre mí</h2>
        <p>
          Backend dev con experiencia en <strong>PHP</strong>, <strong>Laravel</strong> y <strong>React.js</strong>. ¡Me encanta crear sistemas escalables! 🚀
        </p>
        <p>
          También tengo experiencia en <strong>Shopify</strong>, personalizando temas y creando apps. 🛒
        </p>
        <p>
          Me apasiona entender cómo funciona un proyecto y guiar al equipo hacia el éxito. 💡
        </p>
        <p>
          En mi tiempo libre, disfruto viajar ✈️ y hacer <strong>Crossfit</strong>, ¡para mantener el cuerpo y la mente en forma! 💪
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
