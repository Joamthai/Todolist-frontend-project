import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export default function Authenticated({ children }) {
  const ctx = useContext(AuthContext);
  if (!ctx.user) {
    return <Navigate to="/login" />;
  }
  return children;
}
