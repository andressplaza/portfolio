import DecryptedText from '../../assets/ui/DecryptedText/DecryptedText'; // Asegúrate de importar el componente
import './Hero.css'; // Asegúrate de importar el archivo CSS
import ScrollArrow from '../shared/ScrollArrow/ScrollArrow';

function Hero() {
  return (
    <div className="hero-container">
      <h1>
        <DecryptedText
          text="¡Bienvenido a mi portfolio!"
          animateOn="view"
          revealDirection="start"
          sequential={true}
          speed={80}
        />
      </h1>
      <h2>
        <DecryptedText
          text="Soy Andrés, desarrollador de Software."
          speed={90}
          sequential={true}
          animateOn="view"
          revealDirection="start"
        />
      </h2>
      <ScrollArrow nextSectionId="about" />
    </div>
  );
}

export default Hero;
