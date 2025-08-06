import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import * as authAPI from '../api/auth';
import * as tokenUtil from '../utils/token';

interface AuthContextProps {
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    tokenUtil.getToken().then((stored) => {
      if (stored) setToken(stored);
    });
  }, []);

  const login = async (email: string, password: string) => {
    const res = await authAPI.login(email, password);
    await tokenUtil.saveToken(res.token);
    setToken(res.token);
  };

  const logout = () => {
    tokenUtil.clearToken();
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('AuthContext used outside provider');
  return ctx;
};
