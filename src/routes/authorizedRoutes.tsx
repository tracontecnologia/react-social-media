import { createBrowserRouter } from 'react-router-dom';

import { FeedPage, NotFoundPage, ProfilePage } from 'pages';

export const authorizedRouter = createBrowserRouter([
  {
    path: '/',
    element: <FeedPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/perfil/:username',
    element: <ProfilePage />,
    errorElement: <NotFoundPage />,
  },
]);
