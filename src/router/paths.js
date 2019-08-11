/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/',
    name: 'home',
    view: 'Home'
  },
  {
    path: '/demo',
    name: 'demo',
    view: 'Demo'
  },
  {
    path: '/about/:user',
    name: 'about',
    view: 'About'
  }
];
