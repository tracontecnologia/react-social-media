import { createBrowserRouter } from 'react-router-dom';

import { LoginPage, NotFoundPage, ProfilePage } from 'pages';

export const unauthorizedRouter = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/perfil/:username',
    element: <ProfilePage />,
    errorElement: <NotFoundPage />,
  },
]);
