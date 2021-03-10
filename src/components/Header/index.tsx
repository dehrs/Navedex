import React from 'react';

import { Container } from './styles';

import logoHeader from '../../assets/logoHeader.svg';

const Header: React.FC = () => {
  function handleLogOut() {
    localStorage.removeItem('@NaveDex:token');
    localStorage.removeItem('@NaveDex:id');
    window.location.reload();
  }

  return (
    <Container>
      <img src={logoHeader} alt="nave" />
      <button type="button" className="btn-sair" onClick={() => handleLogOut()}>
        Sair
      </button>
    </Container>
  );
};
export default Header;
