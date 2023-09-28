import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function Header() {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center p-4 bg-red-400">
      <h1 className="font-bold text-2xl">Todo List App</h1>
      <ul className="flex gap-5">
        {ctx.user ? (
          <>
            <li className="hover:cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li
              className="hover:cursor-pointer"
              onClick={() => {
                ctx.setUser(false);
                navigate('/login');
                localStorage.removeItem('accessToken');
              }}
            >
              Logout
            </li>
          </>
        ) : (
          <>
            <li className="hover:cursor-pointer">
              <Link to="/login">Login</Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}
