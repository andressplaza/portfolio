import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
// import './ScrollArrow.css';

// eslint-disable-next-line react/prop-types
const ScrollArrow = ({ nextSectionId }) => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById(nextSectionId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button className="scroll-arrow" onClick={scrollToNextSection}>
      <FontAwesomeIcon icon={faArrowDown} size="2x" />
    </button>
  );
};

export default ScrollArrow;
