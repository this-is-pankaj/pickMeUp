import { Link } from "react-router-dom";
import Classes from './UserOptions.module.css';

const UserOptions = (props) => {
  const isLoggedIn = false;
  return (
    <div className={Classes["user-options"]}>
      {
        !isLoggedIn
          ? <div className={Classes.user}>
              <Link to="/login" className="link-text">Login/Signup</Link>
            </div>
          : <div className={Classes.user}>
            <p className="dropdown mb-0">Welcome XYZ <span className="fa fa-chevron-down"></span></p>
            <div className="sub-menu">
              <a href="#logout" className="link-text">Logout</a>
            </div>
          </div>
      }
    </div>
  )
};

export default UserOptions;