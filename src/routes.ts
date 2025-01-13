import { type RouteConfig, route, index, layout } from '@react-router/dev/routes';

export default [
  layout('./layout.tsx', [
    index('./pages/Home.tsx'),
    route('/about', './pages/About.tsx'),
    route('/development', './pages/Development.tsx'),
    route('/ux', './pages/UserExperience.tsx'),
    route('/blog', './pages/Blog.tsx'),
    route('/contact', './pages/Contact.tsx'),
    // * matches all URLs, the ? makes it optional so it will match / as well
    route('*?', 'catchall.tsx'),
  ]),
] satisfies RouteConfig;
