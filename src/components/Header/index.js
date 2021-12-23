import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";
import Classes from './Header.module.css';
import UserOptions from "./UserOptions/UserOptions";

const Header = (props) => {
  const { logo } = props;
  return (
    <div className={Classes.header}>
      <div className={Classes["logo-container"]}>
        <Logo
          text={logo.text}
          img={logo.img}
        />
      </div>
      
      <div className={Classes["navbar-container"]}>
        <NavBar/>
      </div>

      <div className={Classes['user-options-container']}>
        <UserOptions/>
      </div>
    </div>
  );
};

export default Header;