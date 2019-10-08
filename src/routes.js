const nextRoutes = require('@yolkai/next-routes').default;

const routes = nextRoutes()
  .add({ name: 'home', pattern: '/', page: 'HomePage' })
  .add({ name: 'about', pattern: '/about', page: 'AboutPage' });

module.exports = routes;
