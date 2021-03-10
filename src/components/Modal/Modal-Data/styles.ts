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
  /* max-width: 800px; */
  width: 800px;
  height: 360px;

  display: flex;
  background: #fff;

  .coluna-img {
    flex: 1;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .conteudo-visualizacao {
    width: 50%;
    margin-left: 30px;

    div {
      display: flex;
      justify-content: flex-end;
      margin: 5px 5px 0 0;

      button {
        border: none;
        background-color: transparent;
        direction: rtl;
      }
    }

    p {
      margin: 10px 0;
    }

    .footer-visualizacao {
      display: flex;
      justify-content: end;

      button {
        margin-right: 10px;
      }
    }
  }
`;
