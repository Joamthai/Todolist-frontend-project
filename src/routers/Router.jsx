import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Authenticated from '../components/Authenticated';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      // Layout
      <div className="bg-white h-screen">
        <Header />
        <div className="p-8 max-w-xl mx-auto">
          <Outlet />
        </div>
        {/* 
            path: '/', Outlet = <h1>Home Page</h1>
            path: '/login', Outlet = <h1>Login Page</h1>
            path: '/register', Outlet = <h1>Register Page</h1>
        */}
      </div>
    ),
    children: [
      {
        path: '',
        element: (
          <Authenticated>
            <HomePage />
          </Authenticated>
        ),
      },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },

  //   { path: '/', element: <h1>Home Page</h1> },
  //   { path: '/login', element: <h1>Login Page</h1> },
  //   { path: '/register', element: <h1>Register Page</h1> },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
