import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-red-400">
      <h1 className="font-bold text-2xl">Todo List App</h1>
      <ul className="flex gap-5">
        <li className="hover:cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:cursor-pointer">
          <Link to="/login">Login</Link>
        </li>
        <li className="hover:cursor-pointer">Logout</li>
        <li className="hover:cursor-pointer">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </header>
  );
}
