import { Outlet } from "react-router-dom";
import Header from "../Header";
import './Layout.css';

const Layout = (props) => {
  const logoConfig = {
    text: 'PickMeUp',
    img: '',
  };

  const navConfig = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'About',
      url: '/about-us',
    },
    {
      text: 'Contact',
      url: '/contact-us',
    },
  ];
  return (
    <>
      <div className="app-header">
        <Header
          logo={logoConfig}
          nav = {navConfig}
        />
      </div>
      <div className="content-wrapper">
        <Outlet/>
      </div>
    </>
  );
};

export default Layout;