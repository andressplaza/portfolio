import DecryptedText from '../../assets/ui/DecryptedText/DecryptedText'; // Asegúrate de importar el componente
import './Hero.css'; // Asegúrate de importar el archivo CSS

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
      <div>
        <DecryptedText
          text="Explora mis proyectos y conocimientos."
          speed={100}
          maxIterations={30}
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?"
          encryptedClassName="encrypted"
          animateOn="view"
          revealDirection="start"
          sequential={true}
        />
      </div>
    </div>
  );
}

export default Hero;
