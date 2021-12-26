import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";
import Classes from './Header.module.css';
import UserOptions from "./UserOptions/UserOptions";
import { useAuth } from "../../contexts/use-auth";
import MobileView from "./MobileView/MobileView";


const Header = (props) => {
  const { logo } = props;
  const auth = useAuth();
  const { id, user, role } = auth.user;

  return (
    <div className={Classes.header}>
      <div className={Classes["logo-container"]}>
        <Logo
          text={logo.text}
          img={logo.img}
        />
      </div>
      
      <div className={Classes["navbar-container"]}>
        <NavBar
          role={role}
        />
      </div>

      <div className={Classes['user-options-container']}>
        <UserOptions
          id={id}
          user={user}
          onLogout={auth.signout}
        />
      </div>

      <div className={Classes['m-wrapper']}>
        <MobileView
          role={role}
          user={user}
          onLogout={auth.signout}
        />
      </div>
    </div>
  );
};

export default Header;