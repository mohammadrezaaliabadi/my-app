import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import './Layout.css';

const Layout = ({ children, className }) => {
  return (
    <div className={`layout ${className}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
