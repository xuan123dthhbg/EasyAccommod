import React from 'react';
import history from '../services/history';
import { Router, Switch, Route } from 'react-router-dom';
import { NotFound } from '../components/NotFound/NotFound';
import Home from '../scenes/Home/Home';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Login } from '../scenes/Login/Login';
import { TEST } from '../scenes/test';
import AccommodList from '../scenes/Accommod/AccommodList';
import { SignUp } from '../scenes/SignUp/SignUp';
import { SearchPage } from '../scenes/Search/Search';

const routes = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/signup',
    component: SignUp,
    exact: true,
  },
  {
    path: '/private',
    component: TEST,
    private: true,
  },
  {
    path: '/accommod',
    component: AccommodList,
    private: true,
  },
  {
    path: '/search',
    component: SearchPage,
  },
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export function AppRouter(props: any) {
  const accessToken = localStorage.getItem('accessToken');

  return (
    <Router history={history}>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} accessToken={accessToken} />
        ))}
      </Switch>
    </Router>
  );
}

export function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={(props: any) => {
        if (route.private) {
          if (route.accessToken) {
            return (
              <>
                <Header />
                <div className="wrapper">
                  <route.component {...props} routes={route.routes} />
                </div>
                <Footer />
              </>
            );
          } else {
            history.push('/login');
          }
        } else
          return (
            // pass the sub-routes down to keep nesting
            <>
              <Header />
              <div className="wrapper">
                <route.component {...props} routes={route.routes} />
              </div>
              <Footer />
            </>
          );
      }}
    />
  );
}
