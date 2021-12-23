import Classes from './Logo.module.css';
const Logo = (props) => {
  return (
    <div className={Classes['logo-wrapper']}>
      {
        props.img
          ? <img src={props.img} alt={props.text}/>
          : <h1 className={Classes['company-name']}>{props.text}</h1>
      }
    </div>
  )
};

export default Logo;