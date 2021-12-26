import { Link } from "react-router-dom";
import { nav } from "../../../utils/static";
import Classes from './NavBar.module.css';

const NavBar = ({role}) => {
  let pageNavs = [...nav['default']];
  if(role) {
    pageNavs = [...nav[role], ...pageNavs];
  }
  
  const linkClasses = [Classes['nav-link'], 'link-text'].join(' ');
  const navItems = pageNavs.map((n, idx) => {
    return (
      <li
        className={Classes['nav-item']}
        key={`nav-${idx}`}
      >
        <Link to={n.link} className={linkClasses}> {n.text} </Link>
      </li>
    )
  })

  return (
    <div className={Classes.navbar}>
      <ul className={Classes.nav}>
        {navItems}
      </ul>
    </div>
  )
};

export default NavBar;