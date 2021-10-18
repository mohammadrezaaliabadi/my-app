import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../Layout/Layout';
import PORODUCTS from './PRODUCTS.json';
import Products from '../Products/Products';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Blogs from '../Blogs/Blogs';
import Home from '../Home/Home';
import ThemeContext from '../../Context/ThemeContext';
import theme from '../../configs/theme';
import SingleProduct from '../SingleProducts/SingleProduct';

function App() {
  const [activeTheme, setActiveTheme] = useState('dark');
  return (
    <ThemeContext.Provider
      value={{ theme: theme[activeTheme], setActiveTheme }}
    >
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
                <Products data={PORODUCTS} />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/blogs">
                <Blogs />
              </Route>
              <Route path="/product/:id">
                <SingleProduct />
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
