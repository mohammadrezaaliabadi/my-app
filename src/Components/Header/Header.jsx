/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import './Header.scss';
import React, { useCallback, useContext } from 'react';
import { useLocation } from 'react-router';
import NavBar from '../NavBar/NavBar';
import ThemeContext from '../../Context/ThemeContext';
import useElementOnScreen from '../../Hooks/useElementOnScreen';
import MUISwitch from '../MUISwitch/MUISwitch';
import CartMenu from '../CartMenu/CartMenu';

const Header = () => {
  const { theme, setActiveTheme } = useContext(ThemeContext);
  const { pathname } = useLocation();
  const [containerRef, hiddenClassName] = useElementOnScreen(
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    },
    'hidden'
  );
  let title = '';
  if (pathname === '/') title = 'Shop';
  if (pathname === '/about') title = 'About';
  if (pathname === '/blogs') title = 'Blog';
  if (pathname === '/contact') title = 'Contact';
  if (pathname.includes('product')) title = 'Shop';
  const handleThemeCheckBox = useCallback(() => {
    if (theme.className === 'dark') {
      setActiveTheme('light');
    } else if (theme.className === 'light') {
      setActiveTheme('dark');
    }
  }, [theme, setActiveTheme]);

  return (
    <>
      <div className="header">
        <NavBar />
        <MUISwitch onChange={handleThemeCheckBox} defaultChecked />
        <CartMenu />
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
