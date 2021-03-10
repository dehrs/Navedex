import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .tamanho-form {
    width: 50%;
  }
  .topo-page {
    display: flex;
    align-items: center;
    margin: 50px 0;

    a {
      color: #212121;
    }

    h3 {
      margin-left: 10px;
    }
  }

  .btn-salvar {
    background-color: #212121;
    color: #ffffff;
    border: none;
    padding: 10px 50px;
  }

  .div-btn-salvar {
    direction: rtl;
  }
`;
