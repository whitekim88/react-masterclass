import { createBrowserRouter } from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent';
import Root from './Root';
import About from './screens/About';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import User from './screens/users/User';
import Followers from './screens/users/Followers';

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
        children: [
          {
            path: 'followers',
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound></NotFound>,
  },
]);

export default router;
