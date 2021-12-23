import Classes from './Button.module.css';

const Button = (props) => {
  const buttonClasses = [Classes.Button];
  if(props.btnType) {
    buttonClasses.push(Classes[`${props.btnType}-btn`]);
  }
  return (
    <button
      className={buttonClasses.join(' ')}
    >
      {props.children}
    </button>
  )
};

export default Button;