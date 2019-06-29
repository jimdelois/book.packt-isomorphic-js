/**
 * Note: This is naive router to illustrate the basics.
 * A third-party router should eventually be used (like React/Router or Universal Router, etc)
 *  (p. 44)
 */

// TODO: Register more routes here
const routes = [
  require('../routes/Home').default,
  require('../routes/NotFound').default,
];

const _pathEq = (targetPath) => {
  return r => r.path === targetPath;
};

const router = {
  match(location) {
    const route = routes.find(_pathEq(location.path));
    if (!route) {
      return routes.find(_pathEq('/NotFound')).action();
    }

    try {
      return route.action();
    } catch (err) {
      return routes.find(_pathEq('/ServerError')).action();
    }
  }
};

export default router;
