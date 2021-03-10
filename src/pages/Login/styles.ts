import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  form fieldset {
    padding: 40px;
    width: 448px;
  }
  .img-logo {
    margin-bottom: 40px;
  }

  form fieldset div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 20px 0;
  }

  .btn-login {
    width: 100%;
    background-color: #212121;
    color: #ffffff;
    border: none;
    padding: 10px 8px;
  }
`;
