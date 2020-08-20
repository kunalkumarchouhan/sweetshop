import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { Main } from './styled';
import Home from '../pages/home';
import Shop from '../pages/shop';
import Cart from '../pages/cart';
import Header from '../components/header';
import Footer from '../components/footer';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: <Redirect to="/home" />
  },
  {
    path: '/home',
    name: 'Home',
    component: <Home />
  },
  {
    path: '/shop',
    name: 'Shop',
    component: <Shop />
  },
  {
    path: '/cart',
    name: 'Cart',
    component: <Cart />
  }
];

const App = props => {
  const location = useLocation();
  return (
    <Main>
      <Header />
      <Switch location={ location }>
        {
          routes.map(({ path, component }) => (
            <Route exact path={ path } key={ path }>
              { component }
            </Route>
          ))
        }
      </Switch>
      <Footer />
    </Main>
  );
}

export default App;
