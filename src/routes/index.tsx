import { RouterProvider } from 'react-router-dom';

import { authorizedRouter } from './authorizedRoutes';
import { unauthorizedRouter } from './unauthorizedRoutes';

export function AppRoutes() {
  const isAuth = true;

  return (
    <RouterProvider router={isAuth ? authorizedRouter : unauthorizedRouter} />
  );
}
