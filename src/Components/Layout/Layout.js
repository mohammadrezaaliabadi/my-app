import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import './Layout.css';
import { useContext, useReducer } from 'react';
import ThemeContext from '../../Context/ThemeContext';
import themes from '../../configs/themes';
import CartReducer from '../../reducers/CartReducer';
import CartContext from '../../Context/CartContext';

const Layout = ({ children, className }) => {
  const [state, dispatchCart] = useReducer(CartReducer, { carts: [] });
  const themeValues = useContext(ThemeContext);
  return (
    <CartContext.Provider
      value={{ carts: state.carts, dispatchCart: dispatchCart }}
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
