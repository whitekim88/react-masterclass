import { createBrowserRouter } from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent';
import Root from './Root';
import About from './screens/About';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import User from './screens/users/User';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'home',
        element: <Home />,
        errorElement: <ErrorComponent />,
      },

      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'users/:userId',
        element: <User />,
      },
    ],
    errorElement: <NotFound></NotFound>,
  },
]);

export default router;
