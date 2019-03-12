import React from 'react';
import Loadable from 'react-loadable';

function Loading() {
  return <div>Loading...</div>;
}

const homePage = Loadable({
  loader: () => import('./components/Home'),
  loading: Loading,
});

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: homePage,
  },
];

export default routes;
