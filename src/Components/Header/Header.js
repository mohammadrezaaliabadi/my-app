import './Header.scss';
import NavBar from '../NavBar/NavBar';
import { useCallback } from 'react';
import { useContext } from 'react/cjs/react.development';
import ThemeContext from '../../Context/ThemeContext';
import { useLocation } from 'react-router';
import CartContext from '../../Context/CartContext';
import { MdShoppingCart } from 'react-icons/md';
import useElementOnScreen from '../../Hooks/useElementOnScreen';

const Header = () => {
  const themeValues = useContext(ThemeContext);
  let { pathname } = useLocation();
  const { carts } = useContext(CartContext);
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
