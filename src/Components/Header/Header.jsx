/* eslint-disable import/no-extraneous-dependencies */
import './Header.scss';
import React, { useCallback, useContext } from 'react';
import { useLocation } from 'react-router';
import { MdShoppingCart } from 'react-icons/md';
import NavBar from '../NavBar/NavBar';
import ThemeContext from '../../Context/ThemeContext';
import CartContext from '../../Context/CartContext';
import useElementOnScreen from '../../Hooks/useElementOnScreen';

const Header = () => {
  const { carts } = useContext(CartContext);
  const { theme, setActiveTheme } = useContext(ThemeContext);
  const { pathname } = useLocation();
  const [containerRef, hiddenClassName] = useElementOnScreen(
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    },
    'hidden',
  );
  let title = '';
  if (pathname === '/') title = 'Shop';
  if (pathname === '/about') title = 'About';
  if (pathname === '/blogs') title = 'Blog';
  if (pathname === '/contact') title = 'Contact';
  if (pathname.includes('product')) title = 'Shop';
  const handleThemeCheckBox = useCallback(
    () => {
      if (theme.className === 'dark') {
        setActiveTheme('light');
      } else if (theme.className === 'light') {
        setActiveTheme('dark');
      }
    },
    [theme, setActiveTheme],
  );

  return (
    <>
      <div className="header">
        <NavBar />
        <label className="switch">
          <input onChange={handleThemeCheckBox} type="checkbox" />
          <span className="slider round" />
        </label>
        <div className="cart">
          <h4>{carts.length}</h4>
          <MdShoppingCart />
        </div>
      </div>
      {title !== 'Shop' && (
        <div className="header-container">
          <h1 ref={containerRef} className={`main-header ${hiddenClassName}`}>
            {title}
          </h1>
        </div>
      )}
    </>
  );
};

export default Header;
