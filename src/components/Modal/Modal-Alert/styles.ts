import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1040;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  z-index: 100;
  position: relative;
  margin: 20px auto;
  padding: 20px;
  width: 600px;
  background: #fff;

  .btn-close-modal {
    direction: rtl;
    button {
      border: none;
      background-color: transparent;
    }
  }

  .conteudo-visualizacao {
    direction: ltr;

    p {
      margin-top: 30px;
    }

    div {
      direction: rtl;

      button {
        margin-top: 20px;
        margin-right: 10px;
      }
    }
  }
`;
