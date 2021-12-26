import { Link, useNavigate } from "react-router-dom";
import Classes from './UserOptions.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

library.add([
  faChevronDown
]);

const UserOptions = ({id, user, onLogout}) => {
  const navigate = useNavigate();
  const logout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className={Classes["user-options"]}>
      {
        !id
          ? <div className={Classes.user}>
              <Link to="/login" className="link-text">Login/Signup</Link>
            </div>
          : <div className={Classes.user}>
            <p className={[Classes.dropdown, 'm-0'].join(' ')}>
              Welcome { user.firstName } { user.lastName}
              <FontAwesomeIcon icon="chevron-down"/>
            </p>
            <div className={Classes["sub-menu"]}>
              <button 
                className={['btn', Classes['logout-btn']].join(' ')}
                onClick={logout}
              >Logout</button>
            </div>
          </div>
      }
    </div>
  )
};

export default UserOptions;