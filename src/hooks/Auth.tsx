import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  id: string;
}

interface LoginCredenciais {
  email: string;
  password: string;
}

interface AuthContextData {
  id: string;
  login(credenciais: LoginCredenciais): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@NaveDex:token');
    const id = localStorage.getItem('@NaveDex:id');

    if (token && id) return { token, id };

    return {} as AuthState;
  });

  const login = useCallback(async ({ email, password }) => {
    const response = await api.post('users/login', {
      email,
      password,
    });

    const { token, id } = response.data;

    localStorage.setItem('@NaveDex:token', token);
    localStorage.setItem('@NaveDex:id', id);

    setData({ token, id });
  }, []);

  return (
    <AuthContext.Provider value={{ id: data.id, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Essa função deve ser usada em um provider');
  }

  return context;
}
