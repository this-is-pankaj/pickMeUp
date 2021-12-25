import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/use-auth";
import Classes from './UserOptions.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

library.add([
  faChevronDown
]);

const UserOptions = (props) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const { id, user, username } = auth.user;
  const logout = () => {
    auth.signout();
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
                className={['.btn', Classes['logout-btn']].join(' ')}
                onClick={logout}
              >Logout</button>
            </div>
          </div>
      }
    </div>
  )
};

export default UserOptions;