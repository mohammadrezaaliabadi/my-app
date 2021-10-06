import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Button from '../Button/Button';
import PORODUCTS from './PRODUCTS.json';
import Products from '../Products/Products';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Blogs from '../Blogs/Blogs';
import Home from '../Home/Home';
function App() {
  return (
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
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
