import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTruck, faQuestion, faCalendar, faGrinStars, faHistory, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import Classes from './Card.module.css';
import { useNavigate } from 'react-router-dom';

library.add([
  faTruck, faQuestion, faCalendar, faGrinStars, faHistory, faSyncAlt
]);

const Card = ({icon, text, link}) => {
  const navigate = useNavigate();
  const changeURL = () => {
    navigate(link);
  };

  return (
    <div className={Classes.card} onClick={changeURL}>
      <div className={Classes['card-icon']}>
        <FontAwesomeIcon icon={icon}/>
      </div>
      <div className={Classes['card-text']}>
        <h4 className='text-center link-text'>{text}</h4>
      </div>
    </div>
  );
};

export default Card;