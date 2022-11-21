import { createBrowserRouter } from 'react-router-dom';

import { FeedPage, NewPostPage, NotFoundPage, ProfilePage } from 'pages';

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
  {
    path: '/post/novo',
    element: <NewPostPage />,
    errorElement: <NotFoundPage />,
  },
]);
