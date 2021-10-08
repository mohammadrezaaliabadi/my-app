import './Header.scss';
import NavBar from '../NavBar/NavBar';
import { useCallback, useReducer, useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import ThemeContext from '../../Context/ThemeContext';
import { useLocation } from 'react-router';
import CartContext from '../../Context/CartContext';
import { MdShoppingCart } from 'react-icons/md';
const Header = () => {
  const themeValues = useContext(ThemeContext);
  let { pathname } = useLocation();
  const { carts } = useContext(CartContext);
  let title = '';
  if (pathname === '/') title = 'Shop';
  if (pathname === '/about') title = 'About';
  if (pathname === '/blog') title = 'Blog';
  if (pathname === '/contact') title = 'Contact';
  if (pathname.includes('product')) title = 'Shop';
  const handleThemeCheckBox = useCallback(
    e => {
      if (themeValues.theme.className === 'dark') {
        themeValues.setActiveTheme('light');
      } else if (themeValues.theme.className === 'light') {
        themeValues.setActiveTheme('dark');
      }
    },
    [themeValues.theme]
  );
  return (
    <>
      <div className="header">
        <NavBar />
        <label className="switch">
          <input onChange={handleThemeCheckBox} type="checkbox" />
          <span className="slider round" />
        </label>
        <div className="Cart">
          <h4>{carts.length}</h4>
          <MdShoppingCart />
        </div>
      </div>

      {title !== 'Shop' && (
        <div className="header-container">
          <h1 className="main-header">{title}</h1>
        </div>
      )}
    </>
  );
};

export default Header;
