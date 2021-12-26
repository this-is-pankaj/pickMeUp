import { Link } from 'react-router-dom';
import Classes from './Logo.module.css';
const Logo = (props) => {
  return (
    <div className={Classes['logo-wrapper']}>
      {
        props.img
          ? <img src={props.img} alt={props.text}/>
          : <h1 className={Classes['company-name']}>
            <Link to="/">{props.text}</Link>
          </h1>
      }
    </div>
  )
};

export default Logo;