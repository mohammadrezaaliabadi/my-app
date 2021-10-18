import React, { useContext, useReducer } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';
import ThemeContext from '../../Context/ThemeContext';
import CartReducer from '../../reducers/CartReducer';
import CartContext from '../../Context/CartContext';

const Layout = ({ children, className }) => {
  const carts = JSON.parse(localStorage.getItem('carts'));

  const [state, dispatchCart] = useReducer(CartReducer, { carts: carts || [] });
  const themeValues = useContext(ThemeContext);
  return (
    <CartContext.Provider
      value={{ carts: state.carts, dispatchCart }}
    >
      <div className={`layout ${className} ${themeValues.theme.className}`}>
        <Header />
        {children}
        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default Layout;
