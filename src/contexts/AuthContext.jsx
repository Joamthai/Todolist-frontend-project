import { createContext, useState } from 'react';

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem('accessToken') ? true : false
  );
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
