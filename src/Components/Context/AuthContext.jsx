import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'admin',
      passwordHash: bcrypt.hashSync('123456', 10)
    }
  ]);

  const login = (username, password) => {
    const usuario = users.find(u => u.username === username);
    if (usuario && bcrypt.compareSync(password, usuario.passwordHash)) {
      setUser({ username: usuario.username });
      navigate('/dashboard');
    } else {
      alert('Usuário ou senha inválidos.');
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  const register = (username, password) => {
    const existe = users.some(u => u.username === username);
    if (existe) {
      alert('Usuário já cadastrado!');
      return;
    }

    const novoUsuario = {
      id: users.length + 1,
      username,
      passwordHash: bcrypt.hashSync(password, 10),
    };

    setUsers([...users, novoUsuario]);
    alert('Cadastro realizado com sucesso!');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}
