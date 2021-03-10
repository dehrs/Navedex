import React, { useState, FormEvent } from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

import { useAuth } from '../../hooks/Auth';

const Login: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    login({ email, password });
  }

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="img-logo">
              <img src={logoImg} alt="logoNave" />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                placeholder="E-mail"
                value={email}
                name="email"
                id="email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                placeholder="Senha"
                name="password"
                value={password}
                id="password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-login">
              Entrar
            </button>
          </fieldset>
        </form>
      </Content>
    </Container>
  );
};

export default Login;
