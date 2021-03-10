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
  background: white;
  position: relative;
  margin: 20px auto;
  padding: 20px;
  width: 600px;
  background: #fff;

  .conteudo-visualizacao {
    direction: ltr;

    p {
      margin-top: 30px;
    }

    div {
      display: flex;
      direction: rtl;

      button {
        margin-top: 20px;
        margin-right: 10px;
      }
    }

    .btn-light {
      background-color: #212121;
      color: #fff;
      padding: 11px 40px;
      border: none;
      font-size: 14px;
      font-weight: 600;
    }

    .btn-dark {
      background-color: #fff;
      color: #212121;
      padding: 10px 40px;
      border: 1px solid #212121;
      font-size: 14px;
      font-weight: 600;
    }
  }
`;
