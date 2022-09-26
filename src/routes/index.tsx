import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { FeedPage, LoginPage, NotFoundPage } from 'pages';

const unauthorizedRouter = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
]);

const authorizedRouter = createBrowserRouter([
  {
    path: '/',
    element: <FeedPage />,
    errorElement: <NotFoundPage />,
  },
]);

export function AppRoutes() {
  const isAuth = true;

  return (
    <RouterProvider router={isAuth ? authorizedRouter : unauthorizedRouter} />
  );
}
