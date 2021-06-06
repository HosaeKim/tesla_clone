import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
   return (
      <div className="header">
         <div className="header__logo">
            <Link to="/">
               <img
                  src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
                  alt=""
                  className="header__logoImg"
               />
            </Link>
         </div>

         <div className="header__links">
            <Link to="/">Model S</Link>
            <Link to="/">Model e</Link>
            <Link to="/">Model x</Link>
            <Link to="/">Model y</Link>
            <Link to="/">Solar Roof</Link>
            <Link to="/">Solar Panels</Link>
         </div>
         <div className="header__right">
            <Link to="/" className={isMenuOpen && 'header__link--hidden'}>
               Shop
            </Link>
            <Link to="/login" className={isMenuOpen && 'header__link--hidden'}>
               Tesal Account
            </Link>
            <div
               className="header__menu"
               onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
               {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
         </div>
      </div>
   );
};

export default Header;
