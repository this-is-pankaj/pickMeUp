import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Classes from './MobileView.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { nav } from '../../../utils/static';

library.add([
  faBars, faTimes
]);

const MobileView = ({ role, user, onLogout }) => {
  const navigate = useNavigate();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  let pageNavs = [...nav['default']];
  if(role) {
    pageNavs = [...nav[role], ...pageNavs];
  }
  
  const logout = () => {
    onLogout();
    toggleMenu();
  };

  const login = () => {
    navigate('/login');
    toggleMenu();
  };

  return (
    <div className={Classes['mobile-view']}>
      <div className={Classes['m-icons']}>
        <button className={isMenuVisible? ['btn', 'd-none', Classes['menu-toggler']].join(' '): ['btn', Classes['menu-toggler']].join(' ')} onClick={toggleMenu}>
          <FontAwesomeIcon icon="bars"/>
        </button>
        <button className={!isMenuVisible? ['btn', 'd-none', Classes['menu-toggler']].join(' '): ['btn', Classes['menu-toggler']].join(' ')} onClick={toggleMenu}>
          <FontAwesomeIcon icon="times"/>
        </button>
      </div>
      <div className={!isMenuVisible? Classes['m-menu']: [Classes['m-menu'], Classes['slide-in']].join(' ')}>
        <div className={Classes['m-welcome-message']}>
          {
            user
              ? <h4 className='text-center'>Hi {user.firstName} {user.lastName}! </h4>
              : <h4 className='text-center'>Hi Guest! </h4>
          }
          
        </div>
        <ul className={Classes['m-navs']}>
          {
            pageNavs.map((n, idx) => {
              return (
                <li key={`li-${idx}`}>
                  <Link to={n.link} className={['link-text', Classes['m-nav-links']].join(' ')} onClick={toggleMenu}>{n.text}</Link>
                </li>
              )
            })
          }
        </ul>
        <div className={Classes['m-logout-option']}>
          {
            user
              ? <button className={['btn', Classes['m-logout-btn']].join(' ')} onClick={logout}>Logout</button>
              : <button className={['btn', Classes['m-logout-btn']].join(' ')} onClick={login}>Login</button>
          }
          
        </div>
      </div>
    </div>
  );
};

export default MobileView;